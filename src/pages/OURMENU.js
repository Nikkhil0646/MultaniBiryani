import styles from "./OURMENU.module.css";

const OURMENU = () => {
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
          <div className={styles.ourMenu1}>Our Menu</div>
        </div>
        <div className={styles.grid}>
          <a href="/BIRYANI">
            <div className={styles.gridItemContainer}>
              <div className={styles.gridItem}>
                <img
                  className={styles.images}
                  alt=""
                  src="/0cc60040982745633c1bf24920661740-1@2x.png"
                />
              </div>

              <div className={styles.biryaniWrapper}>
                <div className={styles.biryani}>Biryani</div>
              </div>
            </div>
          </a>
          <a href="/RICE">
            <div className={styles.gridItemContainer}>
              <div className={styles.gridItem}>
                <img
                  className={styles.images}
                  alt=""
                  src="/3e2a7b5dc0d21f8cc7757fd57f491ff5-1@2x.png"
                />
              </div>
              <div className={styles.riceWrapper}>
                <div className={styles.rice}>Rice</div>
              </div>
            </div>
          </a>
          <a href="/MUTTON">
            <div className={styles.gridItemContainer}>
              <div className={styles.gridItem}>
                <img
                  className={styles.images}
                  alt=""
                  src="/102e2f53738fa30a7e1cc88e61261c33-1@2x.png"
                />
              </div>
              <div className={styles.muttonWrapper}>
                <div className={styles.mutton}>Mutton</div>
              </div>
            </div>
          </a>
          <a href="/CHICKEN">
            <div className={styles.gridItemContainer}>
              <div className={styles.gridItem}>
                <img
                  className={styles.images}
                  alt=""
                  src="/bc05f6d6776b42bd40914e0b077487c9-1@2x.png"
                />
              </div>
              <div className={styles.chickenWrapper}>
                <div className={styles.chicken}>Chicken</div>
              </div>
            </div>
          </a>
          <a href="/PANNER">
            <div className={styles.gridItemContainer}>
              <div className={styles.gridItem}>
                <img
                  className={styles.images}
                  alt=""
                  src="/9c7228d74b38305bd6c483b4417d749c-1@2x.png"
                />
              </div>
              <div className={styles.pannerWrapper}>
                <div className={styles.panner}>Panner</div>
              </div>
            </div>
          </a>
          <a href="/MUHSROOM">
            <div className={styles.gridItemContainer}>
              <div className={styles.gridItem}>
                <img
                  className={styles.images}
                  alt=""
                  src="/db17641d31c172d2b2739daf968caf86-1@2x.png"
                />
              </div>
              <div className={styles.mushroomWrapper}>
                <div className={styles.mushroom}>Mushroom</div>
              </div>
            </div>
          </a>
          <a href="/MIXVEG">
            <div className={styles.gridItemContainer}>
              <div className={styles.gridItem}>
                <img
                  className={styles.images}
                  alt=""
                  src="/c0566b8ce26a85119cb9dbaff7221bd4-1@2x.png"
                />
              </div>
              <div className={styles.mixVegWrapper}>
                <div className={styles.mixVeg}>Mix Veg</div>
              </div>
            </div>
          </a>
          <a href="/BREADS">
            <div className={styles.gridItemContainer}>
              <div className={styles.gridItem}>
                <img
                  className={styles.images}
                  alt=""
                  src="/356ea95a51eec22af22d0c30e56f9823-1@2x.png"
                />
              </div>
              <div className={styles.breadWrapper}>
                <div className={styles.bread}>Bread</div>
              </div>
            </div>
          </a>
          <a href="/DESSERT">
            <div className={styles.gridItemContainer}>
              <div className={styles.gridItem}>
                <img
                  className={styles.images}
                  alt=""
                  src="/chirerpayeshpohapuddingrecipewithnolengur-1@2x.png"
                />
              </div>
              <div className={styles.dessertWrapper}>
                <div className={styles.dessert}>Dessert</div>
              </div>
            </div>
          </a>
          <a href="/SOFTDRINK">
            <div className={styles.gridItemContainer}>
              <div className={styles.gridItem}>
                <img
                  className={styles.images}
                  alt=""
                  src="/21033241cec90baa0f32f80373d70a61-1@2x.png"
                />
              </div>
              <div className={styles.drinksWrapper}>
                <a className={styles.drinks}>Drinks</a>
              </div>
            </div>
          </a>
        </div>
      </main>
    </div>
  );
};

export default OURMENU;
