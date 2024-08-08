import styles from "./PANNER.module.css";

const PANNER = () => {
  return (
    <div className={styles.panner}>
      <img className={styles.pannerChild} alt="" src="/frame-188.svg" />
      <div className={styles.frameParent}>
        <div className={styles.arrowDownUndefinedGlyphWrapper}>
          <img
            className={styles.arrowDownUndefinedGlyph}
            loading="lazy"
            alt=""
            src="/arrow-down--undefined--glyph-undefined@2x.png"
          />
        </div>
        <a className={styles.panner1}>Panner</a>
      </div>
      <section className={styles.pannerInner}>
        <div className={styles.productDetailsParent}>
          <div className={styles.productDetails}>
            <div className={styles.productName}>
              <div className={styles.cc60040982745633c1bf2492066174} />
              <img
                className={styles.fa91d8176b7cf366255400bb5b5d3eIcon}
                loading="lazy"
                alt=""
                src="/14fa91d8176b7cf366255400bb5b5d3e-1@2x.png"
              />
            </div>
            <div className={styles.productVariants}>
              <div className={styles.variantNames}>
                <h1 className={styles.pannerKadhai}>Panner Kadhai</h1>
                <div className={styles.variantMasala}>
                  <div className={styles.variantPrices}>
                    <div className={styles.priceList}>
                      <a className={styles.prices}>Prices :</a>
                      <div className={styles.kgWrapper}>
                        <div className={styles.kg}>1/4 kg</div>
                      </div>
                    </div>
                    <div className={styles.kgContainer}>
                      <div className={styles.kg1}>1/2 kg</div>
                    </div>
                    <div className={styles.kgFrame}>
                      <div className={styles.kg2}>1 kg</div>
                    </div>
                  </div>
                </div>
                <div className={styles.priceSymbols}>
                  <div className={styles.symbolList}>
                    <div className={styles.wrapper}>
                      <div className={styles.div}>₹200/-</div>
                    </div>
                    <div className={styles.container}>
                      <div className={styles.div1}>₹400/-</div>
                    </div>
                    <div className={styles.div2}>₹800/-</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.productDetails1}>
            <img
              className={styles.productDetailsChild}
              loading="lazy"
              alt=""
              src="/frame-180@2x.png"
            />
            <div className={styles.productDetailsInner}>
              <div className={styles.pannerCornMasalaParent}>
                <h1 className={styles.pannerCornMasala}>Panner Corn Masala</h1>
                <div className={styles.frameWrapper}>
                  <div className={styles.frameGroup}>
                    <div className={styles.pricesParent}>
                      <div className={styles.prices1}>Prices :</div>
                      <div className={styles.frameDiv}>
                        <div className={styles.kg3}>1/4 kg</div>
                      </div>
                    </div>
                    <div className={styles.kgWrapper1}>
                      <div className={styles.kg4}>1/2 kg</div>
                    </div>
                    <div className={styles.kgWrapper2}>
                      <div className={styles.kg5}>1 kg</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.frameParent1}>
                    <div className={styles.frame}>
                      <div className={styles.div3}>₹200/-</div>
                    </div>
                    <div className={styles.wrapper1}>
                      <div className={styles.div4}>₹400/-</div>
                    </div>
                    <div className={styles.div5}>₹800/-</div>
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

export default PANNER;