import React from "react";
import styles from "./Contact.module.css";
import Section from "../Layout/Section";

const Contact = () => {
  return (
    <Section name={"contact"} title={"contact"}>
      <div className={`${styles.contact}`}>
        <div className={styles["contact__content"]}>
          <h3>HIRE ME!</h3>
          <p>
            or feel free to message me if you want to collaborate or have a
            little chat.
          </p>
          <span className={styles.divider}></span>
          <ul className={styles["link-list"]}>
            <li>
              <a>Email</a>
            </li>
            <li>
              <a href={"https://linkedin.com/in/chang-ju-kim-966351255"}>
                LinkedIn
              </a>
            </li>
            <li>
              <a href={"https://github.com/cjoak1028"}>Github</a>
            </li>
            <li>
              <a href={""}>Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
