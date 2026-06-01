import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import TaskBar from "./TaskBar";
import useMedia from './useMedia';
import { useTransition, a } from '@react-spring/web';
import data from './data_CodePage';
import data_archived from './data_CodePage_Archived';
import styles from './codingStyles.module.css';
import useMeasure from 'react-use-measure';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function Masonry() {
  const columns = useMedia(['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)', '(max-width: 599px)'], [3, 3, 1, 1], 2);
  const [ref, { width }] = useMeasure();
  const [items, setItems] = useState(data);
  const [archivedItems, setArchivedItems] = useState(data_archived);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const [seeMoreProjects, setSeeMoreProjects] = useState<boolean>(false);

  const [measuredHeights, setMeasuredHeights] = useState<Record<string, number>>({});
  const [measuredHeightsArchived, setMeasuredHeightsArchived] = useState<Record<string, number>>({});
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const itemRefsArchived = useRef<Record<string, HTMLDivElement | null>>({});

  useLayoutEffect(() => {
    if (!width) return;
    const observers: ResizeObserver[] = [];
    items.forEach((item) => {
      const el = itemRefs.current[item.css];
      if (!el) return;
      const ro = new ResizeObserver(([entry]) => {
        const h = entry.borderBoxSize?.[0]?.blockSize ?? entry.contentRect.height;
        setMeasuredHeights(prev => prev[item.css] === h ? prev : { ...prev, [item.css]: h });
      });
      ro.observe(el);
      observers.push(ro);
    });
    return () => observers.forEach(ro => ro.disconnect());
  }, [items, width]);

  useLayoutEffect(() => {
    if (!width || !seeMoreProjects) return;
    const observers: ResizeObserver[] = [];
    archivedItems.forEach((item) => {
      const el = itemRefsArchived.current[item.css];
      if (!el) return;
      const ro = new ResizeObserver(([entry]) => {
        const h = entry.borderBoxSize?.[0]?.blockSize ?? entry.contentRect.height;
        setMeasuredHeightsArchived(prev => prev[item.css] === h ? prev : { ...prev, [item.css]: h });
      });
      ro.observe(el);
      observers.push(ro);
    });
    return () => observers.forEach(ro => ro.disconnect());
  }, [archivedItems, width, seeMoreProjects]);

  /* calculate heights for gridItems */
  const [heights, gridItems] = useMemo(() => {
    let heights = new Array(columns).fill(0);
    let gridItems = items.map((child, i) => {
      const itemWidth = child.customWidth || width / columns;
      const cardInnerWidth = itemWidth - 70;
      const videoHeight = cardInnerWidth * (9 / 16);
      const fallbackHeight = 160 + videoHeight + 130;
      const itemHeight = measuredHeights[child.css]
        ? measuredHeights[child.css] + 40
        : fallbackHeight;
      const column = heights.indexOf(Math.min(...heights));
      const x = (width / columns) * column;
      const y = (heights[column] += itemHeight) - itemHeight;
      return { ...child, x, y, width: itemWidth, height: itemHeight };
    });
    return [heights, gridItems];
  }, [columns, items, width, measuredHeights]);

  /* calculate heights for archived gridItems */
  const [heights_archived, gridItems_archived] = useMemo(() => {
    let heights = new Array(columns).fill(0);
    let gridItems = archivedItems.map((child, i) => {
      const itemWidth = child.customWidth || width / columns;
      const cardInnerWidth = itemWidth - 70;
      const videoHeight = cardInnerWidth * (9 / 16);
      const fallbackHeight = 160 + videoHeight + 140;
      const itemHeight = measuredHeightsArchived[child.css]
        ? measuredHeightsArchived[child.css] + 40
        : fallbackHeight;
      const column = heights.indexOf(Math.min(...heights));
      const x = (width / columns) * column;
      const y = (heights[column] += itemHeight) - itemHeight;
      return { ...child, x, y, width: itemWidth, height: itemHeight };
    });
    return [heights, gridItems];
  }, [columns, archivedItems, width, measuredHeightsArchived]);

  const transitions = useTransition(gridItems, {
    key: (item) => item.css,
    from: ({ x, y, width }) => ({ x, y, width, opacity: 0 }),
    enter: ({ x, y, width }) => ({ x, y, width, opacity: 1 }),
    update: ({ x, y, width }) => ({ x, y, width }),
    leave: { opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 0,
  });

  const transitions_archived = useTransition(gridItems_archived, {
    key: (item) => item.css,
    from: ({ x, y, width }) => ({ x, y, width, opacity: 0 }),
    enter: ({ x, y, width }) => ({ x, y, width, opacity: 1 }),
    update: ({ x, y, width }) => ({ x, y, width }),
    leave: { opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 0,
  });

  const toggleDetails = (key: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleSeeMoreProjects = () => {
    setSeeMoreProjects(!seeMoreProjects);
  }

  useEffect(() => {
    if (seeMoreProjects) {
      document
        .getElementById("moreProjects")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      document
        .getElementById("moreProjectsButton")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [seeMoreProjects]);

  return (
    <div>
      <div>
        <TaskBar currentPage="Code" />
        <div ref={ref} id="lessProjects" className={styles.list} style={{ height: Math.max(...heights) }}>
          {transitions((style, item, t, index) => (
            <a.div style={{ ...style, height: 'auto' }} key={item.css} id={`grid-item-${index}`}>
              <div className={styles.gridItem} ref={el => { itemRefs.current[item.css] = el; }}>
                <div className={styles.description}>{item.description}</div>
                <div className={styles.summary}>{item.summary}</div>
                <div className={styles.skills}>{item.skills}</div>
                <div className={styles.previewAndDetails}>
                  {/* visual samples of project — button overlaid on image */}
                  {!expandedItems[item.css] &&
                  <div style={{ position: 'relative', aspectRatio: '16 / 9' }}>
                    <button className={styles.detailsButton} onClick={() => toggleDetails(item.css)}>
                      ☰ Details
                    </button>
                    <iframe
                      src={item.vimVideo}
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      title="Browser History Demo"
                      style={{
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        borderRadius: '12px',
                        display: 'block',
                        boxShadow: "0px 10px 20px  #dbdada",
                        overflow: "hidden"
                      }}
                    />
                  </div>}

                  {/* bullet points for project — button flows above collaborators */}
                  <div>
                    {expandedItems[item.css] && (
                      <button className={styles.detailsButtonInline} onClick={() => toggleDetails(item.css)}>
                        ▣ Preview
                      </button>
                    )}
                    {item.collaborators && (
                      <p className={styles.collaborators}>Collaborators: {item.collaborators}</p>
                    )}
                    <div className={styles.scrollSection}>
                      {expandedItems[item.css] &&
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
                      </div>}
                    </div>
                    </div>
                </div>

                {/* GitHub Repo / YouTube Demo Link */}
                <div className={styles.gridItemButtons}>
                  <div className={expandedItems[item.css] ? styles.linkOnDetails: styles.link }>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">{item.linkInfo}!</a>
                  </div>
                </div>

              </div>
            </a.div>
          ))}
        </div>

        <div className={styles.dividerButtonSection}>
          <div className={styles.sectionDivider}>
            <span className={styles.sectionDividerDiamond}>◆</span>
          </div>

          <div className={styles.div_moreProjectsButton} id="moreProjects">
            <button className={styles.moreProjectsButton} onClick={() => toggleSeeMoreProjects()}>
              {!seeMoreProjects ? "click for more projects" : "click for less projects"}
            </button>
          </div>

          <div className={styles.sectionDividerBelow}>
            <span className={styles.sectionDividerDiamond}>◆</span>
          </div>
        </div>

        {/* Archived Projects */}

        {seeMoreProjects && 
          <div ref={ref} className={styles.listArchived} style={{ height: Math.max(...heights_archived) }}>
            {transitions_archived((style, item, t, index) => (
              <a.div style={{ ...style, height: 'auto' }} key={item.css} id={`grid-item-${index}`}>
                <div className={styles.gridItem} ref={el => { itemRefsArchived.current[item.css] = el; }}>
                  <div className={styles.description}>{item.description}</div>
                  <div className={styles.summary}>{item.summary}</div>
                  <div className={styles.skills}>{item.skills}</div>
                  <div className={styles.previewAndDetails}>
                    {/* visual samples of project — button overlaid on image */}
                    {!expandedItems[item.css] &&
                    <div style={{ position: 'relative', aspectRatio: '16 / 9' }}>
                      <button className={styles.detailsButton} onClick={() => toggleDetails(item.css)}>
                        ☰ Details
                      </button>
                      <iframe
                        src={item.vimVideo}
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        title="Browser History Demo"
                        style={{
                          width: '100%',
                          height: '100%',
                          border: 'none',
                          borderRadius: '12px',
                          display: 'block',
                          boxShadow: "0 20px 50px  #dbdada",
                          overflow: "hidden"
                        }}
                      />
                    </div>}

                    {/* bullet points for project — button flows above collaborators */}
                    <div>
                    {expandedItems[item.css] && (
                      <button className={styles.detailsButtonInline} onClick={() => toggleDetails(item.css)}>
                        ▣ Preview
                      </button>
                    )}
                    {item.collaborators && (
                      <p className={expandedItems[item.css] ? styles.collaboratorsOnDetails: styles.collaborators }>Collaborators: {item.collaborators}</p>
                    )}
                    <div className={styles.scrollSection}>
                      {expandedItems[item.css] &&
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
                      </div>}
                    </div>
                    </div>
                  </div>

                  {/* GitHub Repo / YouTube Demo Link */}
                  <div className={styles.gridItemButtons} id="moreProjectsButton">
                    <div className={expandedItems[item.css] ? styles.linkOnDetails : styles.link}>
                      <a href={item.link} target="_blank" rel="noopener noreferrer">{item.linkInfo}!</a>
                    </div>
                  </div>

                </div>
              </a.div>
            ))}
          </div>
        }
      </div>
    </div>
  );
}

const CodingPage = () => {
  return <Masonry />
};

export default CodingPage;
