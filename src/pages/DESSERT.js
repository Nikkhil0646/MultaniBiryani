import styles from "./DESSERT.module.css";

const DESSERT = () => {
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
          <div className={styles.ourMenu1}>Desserts</div>
        </div>
        <div className={styles.grid}>
          <div className={styles.gridItemContainer}>
          <div className={styles.gridItem}>
              <img
                className={styles.images}
                alt=""
                src="/chirer-payesh-poha-pudding-recipe-with-nolen-gur1.png"
              />
            </div>
            <div className={styles.biryaniWrapper}>
              <div className={styles.biryani}>Matka Phirni</div>
              <div className={styles.priceHeaderRow}>
                <div className={styles.priceNameRow}>
                  <div className={styles.prices}>Prices :</div>
                </div>
                <div className={styles.frameParent}>
                  {/* <div className={styles.frameWrapper}>
                    <div className={styles.kgParent}>
                      <div className={styles.kg}>1/2 kg</div>
                      <div className={styles.kg1}>1 kg</div>
                    </div>
                  </div> */}
                  <div className={styles.parent}>
                    <div className={styles.wrapper}>
                      <div className={styles.div1}>₹180/-</div>
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
                src="/85ec98375449bb84e5d726716d2ff27e1.png"
              />
            </div>
            <div className={styles.riceWrapper}>
              <div className={styles.rice}>Dudhi Halwa</div>
              <div className={styles.priceHeaderRow}>
                <div className={styles.priceNameRow}>
                  <div className={styles.prices}>Prices :</div>
                </div>
                <div className={styles.frameParent}>
                  {/* <div className={styles.frameWrapper}>
                    <div className={styles.kgParent}>
                      <div className={styles.kg}>1/2 kg</div>
                      <div className={styles.kg1}>1 kg</div>
                    </div>
                  </div> */}
                  <div className={styles.parent}>
                    <div className={styles.wrapper}>
                      <div className={styles.div1}>₹180/-</div>
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

export default DESSERT;