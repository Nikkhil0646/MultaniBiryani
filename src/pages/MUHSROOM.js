import styles from "./MUHSROOM.module.css";

const MUHSROOM = () => {
  return (
    <div className={styles.ourMenu}>
      <div className={styles.main}>
        <a href="/">
          <img
            className={styles.contentIcon}
            loading="lazy"
            alt=""
            src="/arrow-down--undefined--glyph-undefined@2x.png"
          />
        </a>
      </div>
      <main className={styles.navigation}>
        <div className={styles.menuTitle}>
          <div className={styles.ourMenu1}>Mushroom</div>
        </div>
        <div className={styles.grid}>
          <div className={styles.gridItemContainer}>
          <div className={styles.gridItem}>
              <img
                className={styles.images}
                alt=""
                src="/db17641d31c172d2b2739daf968caf86-1@2x.png"
              />
            </div>
            <div className={styles.biryaniWrapper}>
              <div className={styles.biryani}>Mushroom Butter Masala</div>
              <div className={styles.priceHeaderRow}>
                <div className={styles.priceNameRow}>
                  <div className={styles.prices}>Prices :</div>
                </div>
                <div className={styles.frameParent}>
                  <div className={styles.frameWrapper}>
                    <div className={styles.kgParent}>
                      <div className={styles.kg3}>1/4 kg</div>
                      <div className={styles.kg}>1/2 kg</div>
                      <div className={styles.kg1}>1 kg</div>
                    </div>
                  </div>
                  <div className={styles.parent}>
                    <div className={styles.div}>₹200/-</div>
                    
                    <div className={styles.div1}>₹400/-</div>
                    <div className={styles.wrapper}>
                      <div className={styles.div1}>₹800/-</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
};

export default MUHSROOM;