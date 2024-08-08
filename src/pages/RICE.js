import styles from "./RICE.module.css";

const RICE = () => {
  return (
    <div className={styles.rice}>
      <img className={styles.riceChild} alt="" src="/frame-188.svg" />
      <div className={styles.frameParent}>
        <div className={styles.arrowDownUndefinedGlyphWrapper}>
          <img
            className={styles.arrowDownUndefinedGlyph}
            loading="lazy"
            alt=""
            src="/arrow-down--undefined--glyph-undefined@2x.png"
          />
        </div>
        <a className={styles.rice1}>Rice</a>
      </div>
      <section className={styles.riceInner}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.f3ab45aa4a683b1b43383a9ae9028eWrapper}>
              <img
                className={styles.f3ab45aa4a683b1b43383a9ae9028eIcon}
                loading="lazy"
                alt=""
                src="/f3ab45aa4a683b1b43383a9ae9028e54-1@2x.png"
              />
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.plainRiceParent}>
                <a className={styles.plainRice}>Plain Rice</a>
                <div className={styles.frameDiv}>
                  <div className={styles.frameParent1}>
                    <div className={styles.frameParent2}>
                      <div className={styles.pricesParent}>
                        <a className={styles.prices}>Prices :</a>
                        <div className={styles.kgWrapper}>
                          <div className={styles.kg}>1/2 kg</div>
                        </div>
                      </div>
                      <div className={styles.kgContainer}>
                        <div className={styles.kg1}>1 kg</div>
                      </div>
                    </div>
                    <div className={styles.parent}>
                      <div className={styles.div}>₹100/-</div>
                      <div className={styles.div1}>₹200/-</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent3}>
            <div className={styles.frameWrapper1}>
              <div className={styles.cc60040982745633c1bf2492066174Parent}>
                <div className={styles.cc60040982745633c1bf2492066174} />
                <img
                  className={styles.e0be1de703dcdc166e948bc6611Icon}
                  loading="lazy"
                  alt=""
                  src="/931497e0be1de703dcdc166e948bc661-1@2x.png"
                />
              </div>
            </div>
            <div className={styles.frameWrapper2}>
              <div className={styles.gheeRiceParent}>
                <h1 className={styles.gheeRice}>Ghee Rice</h1>
                <div className={styles.frameWrapper3}>
                  <div className={styles.frameParent4}>
                    <div className={styles.frameParent5}>
                      <div className={styles.pricesGroup}>
                        <div className={styles.prices1}>Prices :</div>
                        <div className={styles.kgFrame}>
                          <div className={styles.kg2}>1/2 kg</div>
                        </div>
                      </div>
                      <div className={styles.kgWrapper1}>
                        <div className={styles.kg3}>1 kg</div>
                      </div>
                    </div>
                    <div className={styles.group}>
                      <div className={styles.div2}>₹125/-</div>
                      <div className={styles.div3}>₹250/-</div>
                    </div>
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

export default RICE;