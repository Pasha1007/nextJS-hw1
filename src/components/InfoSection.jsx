import styles from "../styles/mainPage.module.css";

export function InfoSection() {
  return (
    <section className={styles.infoCont}>
      <div className={styles.infoTxt}>
        <h5>#1 Product</h5>
        <h4>By Kramar Pavlo</h4>
        <h1>Warhammer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
          tenetur, quasi alias quod, magni vel labore maiores
        </p>
        <a href="#">Watch</a>
        <a href="#" className={styles.compIcon}>
          Compare
        </a>
      </div>
      <div className={styles.infoImg}>
        <img src="sprite.png" alt=""></img>
      </div>
    </section>
  );
}
