import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { HiOutlineChevronDown } from "react-icons/hi";
import { AiOutlineSmile } from "react-icons/ai";

const Hero = () => {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div className={`${styles.hero} flex flex-d-c flex-jc-c`}>
      <div className={styles.about}>
        <p className={styles.name}>Chang-Ju Kim</p>
        <p>Front-End Developer</p>
        <p className={styles.location}>
          TORONTO &#8212;{" "}
          <span className={styles.time}>{date.toLocaleTimeString()}</span>
        </p>
      </div>
      <div className={styles.contact}>
        <p className={styles.email}>changju.kim10@gmail.com</p>
        <p>905 580 9682</p>
      </div>
    </div>
  );
};

export default Hero;
