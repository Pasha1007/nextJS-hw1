import { useEffect } from "react";
import styles from "../styles/mainPage.module.css";
import vueIcon from "../assets/icons/vue-icon.svg";
import reactIcon from "../assets/icons/react-icon.svg";
import nextJsIcon from "../assets/icons/nextJs-icon.svg";
import ScrollReveal from "scrollreveal";

export function IconsBlock() {
  useEffect(() => {
    const scrollR = ScrollReveal({
      distance: "65px",
      duration: 2600,
      delay: 450,
      reset: true,
    });

    scrollR.reveal(`.${styles.icons}`, { delay: 450, origin: "left" });
  });
  return (
    <div className={styles.icons}>
      <a href="#">
        <img src={vueIcon} alt="Vue Icon"></img>
      </a>
      <a href="#">
        <img src={reactIcon} alt="React Icon"></img>
      </a>
      <a href="#">
        <img src={nextJsIcon} alt="Next.js Icon"></img>
      </a>
    </div>
  );
}
