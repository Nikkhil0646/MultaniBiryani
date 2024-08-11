import styles from "./MIXVEG.module.css";

const MIXVEG = () => {
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
          <div className={styles.ourMenu1}>Mix Veg</div>
        </div>
        <div className={styles.grid}>
          <div className={styles.gridItemContainer}>
          <div className={styles.gridItem}>
              <img
                className={styles.images}
                alt=""
                src="/c0566b8ce26a85119cb9dbaff7221bd4-1@2x.png"
              />
            </div>
            <div className={styles.biryaniWrapper}>
              <div className={styles.biryani}>Sakzi Keema Masala</div>
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
                    <div className={styles.div}>₹150/-</div>
                    
                    <div className={styles.div1}>₹300/-</div>
                    <div className={styles.wrapper}>
                      <div className={styles.div1}>₹600/-</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.gridItemContainer}>
          <div className={styles.gridItem}>
              <img
                className={styles.images}
                alt=""
                src="/89ccf1f4585b05875c07a2c008b230f21.png"
              />
            </div>
            <div className={styles.riceWrapper}>
              <div className={styles.rice}>Yellow Dal Fry</div>
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
                    <div className={styles.div}>₹150/-</div>
                    
                    <div className={styles.div1}>₹300/-</div>
                    <div className={styles.wrapper}>
                      <div className={styles.div1}>₹600/-</div>
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

export default MIXVEG;