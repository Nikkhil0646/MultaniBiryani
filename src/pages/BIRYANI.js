import styles from "./BIRYANI.module.css";

const BIRYANI = () => {
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
          <div className={styles.ourMenu1}>BIRYANI</div>
        </div>
        <div className={styles.grid}>
          <div className={styles.gridItemContainer}>
            <div className={styles.gridItem}>
              <img
                className={styles.images}
                alt=""
                src="/0cc60040982745633c1bf24920661740 1.png"
              />
            </div>
            <div className={styles.biryaniWrapper}>
              <div className={styles.biryani}>Mutton Biryani</div>
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
                src="/6917b606fb3dda9ecebb5d25bb980d1d-1@2x.png"
              />
            </div>
            <div className={styles.riceWrapper}>
              <div className={styles.rice}>Chicken Biryani</div>
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
                    <div className={styles.div}>₹250/-</div>
                    <div className={styles.wrapper}>
                      <div className={styles.div1}>₹500/-</div>
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
                src="/c1aa6d10d5e77c7234d1cadc4119ac97 1.png"
              />
            </div>
            <div className={styles.muttonWrapper}>
              <div className={styles.mutton}>Chicken Biryani</div>
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
                    <div className={styles.div}>₹150/-</div>
                    <div className={styles.wrapper}>
                      <div className={styles.div1}>₹300/-</div>
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

export default BIRYANI;
