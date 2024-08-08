import styles from "./DESSERT.module.css";

const DESSERT = () => {
  return (
    <div className={styles.dessert}>
      <img className={styles.dessertChild} alt="" src="/frame-188.svg" />
      <div className={styles.structure}>
        <div className={styles.layout}>
          <img
            className={styles.arrowDownUndefinedGlyph}
            loading="lazy"
            alt=""
            src="/arrow-down--undefined--glyph-undefined@2x.png"
          />
        </div>
        <a className={styles.dessert1}>Dessert</a>
      </div>
      <section className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.itemRow}>
            <div className={styles.itemCell} />
            <div className={styles.itemDetails}>
              <div className={styles.itemName}>
                <a className={styles.matkaPhirni}>Matka Phirni</a>
                <div className={styles.itemPrice}>
                  <div className={styles.priceLabel}>
                    <a className={styles.prices}>Prices :</a>
                    <div className={styles.div}>₹80/-</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.itemRow1}>
            <div className={styles.itemRowChild} />
            <div className={styles.itemRowInner}>
              <div className={styles.dudhiHalwaParent}>
                <h1 className={styles.dudhiHalwa}>Dudhi Halwa</h1>
                <div className={styles.frameWrapper}>
                  <div className={styles.pricesParent}>
                    <div className={styles.prices1}>Prices :</div>
                    <div className={styles.div1}>₹120/-</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DESSERT;