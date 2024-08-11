import styles from "./RICE.module.css";

const RICE = () => {
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
          <div className={styles.ourMenu1}>RICE</div>
        </div>
        <div className={styles.grid}>
          <div className={styles.gridItemContainer}>
          <div className={styles.gridItem}>
              <img
                className={styles.images}
                alt=""
                src="/3e2a7b5dc0d21f8cc7757fd57f491ff5-1@2x.png"
              />
            </div>
            <div className={styles.biryaniWrapper}>
              <div className={styles.biryani}>Plain Rice</div>
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
                    <div className={styles.div}>₹100/-</div>
                    <div className={styles.wrapper}>
                      <div className={styles.div1}>₹200/-</div>
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
                src="/931497e0be1de703dcdc166e948bc6611.png"
              />
            </div>
            <div className={styles.riceWrapper}>
              <div className={styles.rice}>Ghee Rice</div>
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
                    <div className={styles.div}>₹125/-</div>
                    <div className={styles.wrapper}>
                      <div className={styles.div1}>₹250/-</div>
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

export default RICE;