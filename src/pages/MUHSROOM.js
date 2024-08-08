import styles from "./MUHSROOM.module.css";

const MUHSROOM = () => {
  return (
    <div className={styles.muhsroom}>
      <img className={styles.muhsroomChild} alt="" src="/frame-188.svg" />
      <div className={styles.frameParent}>
        <div className={styles.arrowDownUndefinedGlyphWrapper}>
          <img
            className={styles.arrowDownUndefinedGlyph}
            loading="lazy"
            alt=""
            src="/arrow-down--undefined--glyph-undefined@2x.png"
          />
        </div>
        <a className={styles.mushroom}>Mushroom</a>
      </div>
      <section className={styles.muhsroomInner}>
        <div className={styles.frameGroup}>
          <div className={styles.db17641d31c172d2b2739daf968cafWrapper}>
            <img
              className={styles.db17641d31c172d2b2739daf968cafIcon}
              loading="lazy"
              alt=""
              src="/db17641d31c172d2b2739daf968caf86-2@2x.png"
            />
          </div>
          <div className={styles.masalaDetailsWrapper}>
            <div className={styles.masalaDetails}>
              <a className={styles.mushroomButterMasala}>
                Mushroom Butter Masala
              </a>
              <div className={styles.priceTableWrapper}>
                <div className={styles.priceTable}>
                  <div className={styles.tableHeader}>
                    <div className={styles.weightUnit}>
                      <a className={styles.prices}>Prices :</a>
                      <div className={styles.kgPlaceholder}>
                        <div className={styles.kg}>1/4 kg</div>
                      </div>
                    </div>
                    <div className={styles.weightUnit1}>
                      <div className={styles.kg1}>1/2 kg</div>
                    </div>
                    <div className={styles.weightUnit2}>
                      <div className={styles.kg2}>1 kg</div>
                    </div>
                  </div>
                  <div className={styles.priceValue}>
                    <div className={styles.rupeeSymbol}>
                      <div className={styles.div}>₹200/-</div>
                    </div>
                    <div className={styles.rupeeSymbol1}>
                      <div className={styles.div1}>₹400/-</div>
                    </div>
                    <div className={styles.div2}>₹800/-</div>
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

export default MUHSROOM;