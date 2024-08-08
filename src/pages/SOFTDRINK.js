import styles from "./SOFTDRINK.module.css";

const SOFTDRINK = () => {
  return (
    <div className={styles.softDrink}>
      <img className={styles.softDrinkChild} alt="" src="/frame-188.svg" />
      <section className={styles.container}>
        <div className={styles.container1}>
          <div className={styles.container2}>
            <img
              className={styles.arrowDownUndefinedGlyph}
              loading="lazy"
              alt=""
              src="/arrow-down--undefined--glyph-undefined@2x.png"
            />
          </div>
          <a className={styles.softDrinks}>Soft Drinks</a>
        </div>
        <div className={styles.container3}>
          <div className={styles.container4}>
            <div className={styles.container5} />
            <div className={styles.container6}>
              <div className={styles.container7}>
                <a className={styles.roseLassi}>Rose Lassi</a>
                <div className={styles.container8}>
                  <div className={styles.container9}>
                    <a className={styles.prices}>Prices :</a>
                    <div className={styles.div}>₹120/-</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.container10}>
        <div className={styles.container11} />
        <div className={styles.container12}>
          <div className={styles.container13}>
            <h1 className={styles.kesharLassi}>Keshar Lassi</h1>
            <div className={styles.container14}>
              <div className={styles.container15}>
                <div className={styles.prices1}>Prices :</div>
                <div className={styles.div1}>₹140/-</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.container16}>
        <div className={styles.containerChild} />
        <div className={styles.containerInner}>
          <div className={styles.multaniLassiParent}>
            <h1 className={styles.multaniLassi}>Multani Lassi</h1>
            <div className={styles.frameWrapper}>
              <div className={styles.pricesParent}>
                <div className={styles.prices2}>Prices :</div>
                <div className={styles.div2}>₹100/-</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.container17}>
        <div className={styles.containerParent}>
          <div className={styles.container18} />
          <div className={styles.container19}>
            <div className={styles.container20}>
              <h1 className={styles.coldDrink}>Cold Drink</h1>
              <div className={styles.container21}>
                <div className={styles.container22}>
                  <div className={styles.prices3}>Prices :</div>
                  <h1 className={styles.mrp}>MRP</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.container23}>
        <div className={styles.frameParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameContainer}>
            <div className={styles.waterParent}>
              <h1 className={styles.water}>Water</h1>
              <div className={styles.frameDiv}>
                <div className={styles.pricesGroup}>
                  <div className={styles.prices4}>Prices :</div>
                  <div className={styles.div3}>₹20/-</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.container24}>
        <div className={styles.frameGroup}>
          <div className={styles.frameItem} />
          <div className={styles.frameWrapper1}>
            <div className={styles.faludaParent}>
              <h1 className={styles.faluda}>Faluda</h1>
              <div className={styles.frameWrapper2}>
                <div className={styles.pricesContainer}>
                  <div className={styles.prices5}>Prices :</div>
                  <div className={styles.div4}>₹140/-</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SOFTDRINK;