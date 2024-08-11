import styles from "./CHICKEN.module.css";

const CHICKEN = () => {
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
          <div className={styles.ourMenu1}>Chicken</div>
        </div>
        <div className={styles.grid}>
          <div className={styles.gridItemContainer}>
            <div className={styles.gridItem}>
              <img
                className={styles.images}
                alt=""
                src="/5de5021a1a8e754bc3f0aba7eca724e01.png"
              />
            </div>
            <div className={styles.biryaniWrapper}>
              <div className={styles.biryani}>Chicken Kassa</div>
              <div className={styles.priceHeaderRow}>
                <div className={styles.priceNameRow}>
                  <div className={styles.prices}>Prices :</div>
                </div>
                <div className={styles.frameParent}>
                  <div className={styles.frameWrapper}>
                    <div className={styles.kgParent}>
                      <div className={styles.kg}>1/2 kg</div>
                      <div className={styles.kg1}>1 kg</div>
                    </div>
                  </div>
                  <div className={styles.parent}>
                    <div className={styles.div}>₹350/-</div>
                    <div className={styles.wrapper}>
                      <div className={styles.div1}>₹700/-</div>
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
                src="/cfc37e975cbe53e8e8e4297bc92acfc31.png"
              />
            </div>
            <div className={styles.riceWrapper}>
              <div className={styles.rice}>Chicken Bharta</div>
              <div className={styles.priceHeaderRow}>
                <div className={styles.priceNameRow}>
                  <div className={styles.prices}>Prices :</div>
                </div>
                <div className={styles.frameParent}>
                  <div className={styles.frameWrapper}>
                    <div className={styles.kgParent}>
                      <div className={styles.kg}>1/2 kg</div>
                      <div className={styles.kg1}>1 kg</div>
                    </div>
                  </div>
                  <div className={styles.parent}>
                    <div className={styles.div}>₹350/-</div>
                    <div className={styles.wrapper}>
                      <div className={styles.div1}>₹700/-</div>
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

export default CHICKEN;
