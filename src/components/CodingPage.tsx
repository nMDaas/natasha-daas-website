import React, { useEffect, useMemo, useState, useRef } from "react";
import { gsap } from "gsap";
import useMedia from './useMedia'
import { useTransition, a } from '@react-spring/web'
import data from './data'
import styles from './codingStyles.module.css'
import useMeasure from 'react-use-measure'
import photoeditor2 from '../assets/code/re.jpg';

function Masonry() {
  return (
    <div>
    <img src={photoeditor2}/>
  </div>
  );
}

const CodingPage = () => {
  return <Masonry />
};

export default CodingPage;
