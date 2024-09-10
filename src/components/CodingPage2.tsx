import React, { useEffect, useMemo, useState, useRef } from "react";
import { gsap } from "gsap";
import TaskBar from "./TaskBar2";
import useMedia from './useMedia'
import { useTransition, a } from '@react-spring/web'
import data from './data'
import styles from './codingStyles.module.css'
import useMeasure from 'react-use-measure'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function Masonry() {
  const columns = useMedia(['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)', '(max-width: 599px)'], [3, 3, 1, 1], 2)
  const [ref, { width }] = useMeasure()
  const [items, set] = useState(data)

  const [heights, gridItems] = useMemo(() => {
    let heights = new Array(columns).fill(0);
    let gridItems = items.map((child, i) => {
      const itemWidth = child.customWidth || width / columns;
      const column = heights.indexOf(Math.min(...heights));
      const x = (width / columns) * column;
      const y = (heights[column] += child.height / 2) - child.height / 2;
      return { ...child, x, y, width: itemWidth, height: child.height / 2 };
    });
    return [heights, gridItems];
  }, [columns, items, width]);

  const transitions = useTransition(gridItems, {
    key: (item) => item.css,
    from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });

  return (
    <div>
      <TaskBar currentPage="Code" />
      <div ref={ref} className={styles.list} style={{ height: Math.max(...heights) }}>
        {transitions((style, item, t, index) => (
          <a.div style={style} key={item.css} id={`grid-item-${index}`}>
            <div className={styles.gridItem}>
              <div className={styles.description}>{item.description}</div>
              <div className={styles.summary}>{item.summary}</div>
              <div className={styles.skills}>{item.skills}</div>
              {item.collaborators && (
              <p className={styles.collaborators}>Collaborators: {item.collaborators}</p>
              )}  
              <div className={styles.detail}>
               
                {Array.isArray(item.details) ? (
                  <ul>
                    {item.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{item.details}</p>
                )}
              </div>
              <div className={styles.link}><a href={item.link} target="_blank" rel="noopener noreferrer">VIEW PROJECT!</a></div>
              {!item.video && (
                <Slide arrows={item.hoverImages.length > 1}>
                {item.hoverImages.map((src, idx) => (
                  <div key={idx} className="each-slide-effect" style={{ height: '300px' }}>
                    {src.endsWith('.mp4') ? (
                      <video src={src} autoPlay loop muted playsInline style={{ height: '100%', width: '100%'}} />
                    ) : (
                      <div style={{ backgroundImage: `url(${src})`, height: '100%', width: 'auto', backgroundSize: 'cover' }} />
                    )}
                  </div>
                ))}
              </Slide>
              )}
              {item.video && (
                <video className={styles.video} width={item.vidWidth} height={item.vidHeight} autoPlay loop muted>
                  <source src={item.video} type="video/mp4"/>
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </a.div>
        ))}
      </div>
    </div>
  );
}

const CodingPage = () => {
  return <Masonry />
};

export default CodingPage;
