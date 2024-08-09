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
          <div className={styles.gridItemContainer}>
            <div className={styles.gridItem} />
            <div className={styles.biryaniWrapper}>
              <div className={styles.biryani}>Biryani</div>
            </div>
          </div>
          <div className={styles.gridItemContainer}>
            <div className={styles.gridItem} />
            <div className={styles.riceWrapper}>
              <div className={styles.rice}>Rice</div>
            </div>
          </div>
          <div className={styles.gridItemContainer}>
            <div className={styles.gridItem} />
            <div className={styles.muttonWrapper}>
              <div className={styles.mutton}>Mutton</div>
            </div>
          </div>
          <div className={styles.gridItemContainer}>
            <div className={styles.gridItem} />
            <div className={styles.chickenWrapper}>
              <div className={styles.chicken}>Chicken</div>
            </div>
          </div>
          <div className={styles.gridItemContainer}>
            <div className={styles.gridItem} />
            <div className={styles.pannerWrapper}>
              <div className={styles.panner}>Panner</div>
            </div>
          </div>
          <div className={styles.gridItemContainer}>
            <div className={styles.gridItem} />
            <div className={styles.mushroomWrapper}>
              <div className={styles.mushroom}>Mushroom</div>
            </div>
          </div>
          <div className={styles.gridItemContainer}>
            <div className={styles.gridItem} />
            <div className={styles.mixVegWrapper}>
              <div className={styles.mixVeg}>Mix Veg</div>
            </div>
          </div>
          <div className={styles.gridItemContainer}>
            <div className={styles.gridItem} />
            <div className={styles.breadWrapper}>
              <div className={styles.bread}>Bread</div>
            </div>
          </div>
          <div className={styles.gridItemContainer}>
            <div className={styles.gridItem} />
            <div className={styles.dessertWrapper}>
              <div className={styles.dessert}>Dessert</div>
            </div>
          </div>
          <div className={styles.gridItemContainer}>
            <div className={styles.gridItem} />
            <div className={styles.drinksWrapper}>
              <a className={styles.drinks}>Drinks</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OURMENU;
