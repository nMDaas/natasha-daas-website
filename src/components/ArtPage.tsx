import React, { useEffect, useMemo, useState } from "react";
import { gsap } from "gsap";
import useMedia from './useMedia';
import { useTransition, a } from '@react-spring/web';
import data from './dataArt';
import dataMobile from './dataArtMobile';
import styles from './styles.module.css';
import useMeasure from 'react-use-measure';

function Masonry() {
  const columns = useMedia(['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'], [6, 5, 4], 2);
  const [ref, { width }] = useMeasure();
  const [items, setItems] = useState(data);

  const isMobile = width <= 600;

  useEffect(() => {
    // Set the data based on whether it is mobile or not
    if (isMobile) {
      // Assuming you have different data for mobile
      setItems(dataMobile); // Replace with mobile-specific data if available
    } else {
      setItems(data); // Replace with desktop-specific data if available
    }
  }, [isMobile]);

  const [heights, gridItems] = useMemo(() => {
    let heights = new Array(columns).fill(0);
    let gridItems = items.map((child, i) => {
      const column = heights.indexOf(Math.min(...heights));
      const size = child.size || 50; // Assuming each item has a size property or default to 50
      const x = (width / columns) * column + (width / columns - size) / 2; // Centering the circle
      const y = (heights[column] += size) - size;
      return { ...child, x, y, width: size, height: size };
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
    <div ref={ref} className={styles.list} style={{ height: Math.max(...heights) }}>
      {transitions((style, item) => (
        <a.div style={{ ...style, borderRadius: '50%' }}>
          <div 
            style={{ 
              backgroundImage: `url(${item.css}?auto=compress&dpr=2&h=500&w=500)`, 
              borderRadius: '50%' 
            }} 
          />
        </a.div>
      ))}
    </div>
  );
}

const ArtPage = () => {
  return <Masonry />;
};

export default ArtPage;
