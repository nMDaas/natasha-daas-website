import React, { useEffect, useMemo, useState, useRef } from "react";
import { gsap } from "gsap";
import useMedia from './useMedia'
import { useTransition, a } from '@react-spring/web'
import data from './data'
import styles from './codingStyles.module.css'
import useMeasure from 'react-use-measure'
import opengl from '/code/opengl.mp4';

function Masonry() {
  const columns = useMedia(['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'], [3, 3, 2], 2)
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

  const intervalIds = useRef({});

  useEffect(() => {
    items.forEach((item, index) => {
      const element = document.getElementById(`grid-item-${index}`);
      const image = element.querySelector('.image');
      const hoverImages = item.hoverImages;
      let imageIndex = 0;


      
      // backgroundImage: `url(${hoverImages[imageIndex]})`,
      const changeImage = () => {
        gsap.to(image, {
          backgroundImage: `url(${hoverImages[imageIndex]}?auto=compress&dpr=2&h=500&w=500)`,
          duration: 0.5,
          ease: "power3.inOut",
          onComplete: () => {
            imageIndex = (imageIndex + 1) % hoverImages.length;
            intervalIds.current[index] = setTimeout(changeImage, 1500); // Pause for 1.5 seconds before changing the image
          }
        });
      };

      changeImage();
    });

    return () => {
      // Clear all intervals when the component unmounts
      Object.values(intervalIds.current).forEach(clearInterval);
    };
  }, [items]);

  const urls = [
    "/natasha-daas-website/code/raytracer.jpg",
    "/natasha-daas-website/code/productionplanner.jpg",
    "/natasha-daas-website/code/bakeapp.jpg",
    "/natasha-daas-website/code/plantGen.jpg",
    "/natasha-daas-website/code/portfolio.jpg",
    "/natasha-daas-website/code/rb.jpg",
    "/natasha-daas-website/code/rc.jpg",
    "/natasha-daas-website/code/rd.jpg",
    "/natasha-daas-website/code/bakeapp.jpg",
    "/natasha-daas-website/code/photoeditor.jpg",
    "/natasha-daas-website/code/re.jpg",
    "/natasha-daas-website/code/rf.jpg",
    "/natasha-daas-website/code/rg.jpg",
    "/natasha-daas-website/code/rh.jpg",
    "/natasha-daas-website/code/ri.jpg",
  ]
  
  /*
  useEffect(() => {
    preloadImages();
  }, []);*/

  /*
  function preloadImages() {
    for (let i = 0; i < urls.length; i++) {
      console.log(urls[i])
      preloadImage(urls[i]);
    }
  }

  function preloadImage(url) {
    const img = new Image();
    img.src = url;
  }
*/ 
  return (
    <div ref={ref} className={styles.list} style={{ height: Math.max(...heights) }}>
      {transitions((style, item, t, index) => (
        <a.div style={style} key={item.css} id={`grid-item-${index}`}>
          <div className={`${styles.gridItem} image`} 
               style={{ backgroundImage: `url(${item.css}?auto=compress&dpr=2&h=500&w=500)` }}>
            <div className={styles.description}>{item.description}</div>
            <div className={styles.skills}>{item.skills}</div>
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
            <div className={styles.link}><a href={item.link} target="_blank" rel="noopener noreferrer">View Project!</a></div>
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
  );
}

const CodingPage = () => {
  return <Masonry />
};

export default CodingPage;