import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={`${styles.about}`}>
      <div className={styles["container-1"]}>
        <h3>PASSIONATE FRONT-END DEVELOPER BASED IN TORONTO</h3>
      </div>
      <div className={styles["container-2"]}>
        <p>
          I DISCOVERED MY PASSION FOR BUILDING THINGS ON THE WEB IN 2017 DURING
          AN INTERNSHIP AS A FULL-STACK WEB DEVELOPER.
        </p>
        <p>
          I AM CREATIVE AND GIVE A CONSIDERABLE AMOUNT OF ATTENTION TO DETAIL. I
          AM ABLE TO CRAFT WEBSITES THAT ARE BOTH FUNCTIONAL AND VISUALLY
          APPEALING WITH GREAT PROFICIENCY.
        </p>
        <p>
          I CONTINUE TO EXPERIMENT WITH VARIOUS TOOLS AND TECHNIQUES WITH THE
          GOAL OF DELIVERING THE FINEST WEB EXPERIENCES.
        </p>
      </div>
    </div>
  );
};

export default About;