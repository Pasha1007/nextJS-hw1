import styles from "../styles/mainPage.module.css";
import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

export function Header() {
  const burgerRef = useRef(null);
  const headerListRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const burger = burgerRef.current;
    const headerList = headerListRef.current;
    const header = headerRef.current;

    const handleBurgerClick = () => {
      burger.classList.toggle("ri-close-large-line");
      headerList.classList.toggle(styles.open);
      header.classList.toggle(styles.headerBackground);
    };

    burger.addEventListener("click", handleBurgerClick);

    const scrollR = ScrollReveal({
      distance: "65px",
      duration: 2600,
      delay: 450,
      reset: true,
    });

    scrollR.reveal(`.${styles.infoTxt}`, { delay: 200, origin: "top" });
    scrollR.reveal(`.${styles.infoImg}`, { delay: 400, origin: "right" });

    return () => {
      burger.removeEventListener("click", handleBurgerClick);
    };
  }, []);

  return (
    <header ref={headerRef} className={styles.header}>
      <a href="#" className={styles.logo}>
        LOGO
      </a>
      <ul ref={headerListRef} className={styles.headerList}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Content</a>
        </li>
        <li>
          <a href="#">Links</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
      </ul>
      <svg
        ref={burgerRef}
        id="burger-icon"
        className={styles.burgerIcon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
      >
        <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
      </svg>
    </header>
  );
}
