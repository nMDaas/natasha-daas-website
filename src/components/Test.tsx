import React, { useState, useEffect } from "react";
import { useTransition, animated } from '@react-spring/web';
import styles from './Test.module.css'; // Ensure you have appropriate CSS for styles.gridItem

const Test = () => {
  const [count, setCount] = useState(0);
  const urls = [
    "/natasha-daas-website/code/raytracer.jpg",
    "/natasha-daas-website/code/rb.jpg",
    "/natasha-daas-website/code/rc.jpg",
    "/natasha-daas-website/code/rd.jpg",
  ];

  // Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % urls.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const transitions = useTransition(count, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <div className={styles.gridContainer}>
      {transitions((style, i) => (
        <animated.div
          key={i}
          className={styles.gridItem}
          style={{ 
            ...style,
            backgroundImage: `url(${urls[i]}?auto=compress&dpr=2&h=500&w=500)` 
          }}
        />
      ))}
    </div>
  );
}

export default Test;
