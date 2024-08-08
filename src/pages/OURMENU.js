import PropTypes from "prop-types";
import styles from "./OURMENU.module.css";

const OURMENU = ({ className = "" }) => {
  return (
    <div className={[styles.ourMenu, className].join(" ")}>
      {/* <img className={styles.ourMenuChild} alt="" src="/frame-188.svg" />
      <div className={styles.navigation}>
        <img
          className={styles.arrowDownUndefinedGlyph}
          loading="lazy"
          alt=""
          src="/arrow-down--undefined--glyph-undefined@2x.png"
        />
      </div> */}
      <section className={styles.grid}>
        <div className={styles.menuHeader}>
          <a className={styles.ourMenu1}>Our Menu</a>
        </div>
        <div className={styles.itemsBackground}>
          <div className={styles.biryaniContainerParent}>
            <div className={styles.biryaniContainer}>
              <img
                className={styles.cc60040982745633c1bf2492066174Icon}
                loading="lazy"
                alt=""
                src="/0cc60040982745633c1bf24920661740-1@2x.png"
              />
            </div>
            <div className={styles.itemCategory}>
              <a className={styles.biryani}>Biryani</a>
            </div>
          </div>
        </div>
        <div className={styles.itemsBackground1}>
          <div className={styles.itemsAndPricesParent}>
            <div className={styles.itemsAndPrices}>
              <img
                className={styles.e2a7b5dc0d21f8cc7757fd57f491ffIcon}
                alt=""
                src="/3e2a7b5dc0d21f8cc7757fd57f491ff5-1@2x.png"
              />
            </div>
            <div className={styles.categoryRow}>
              <div className={styles.rice}>Rice</div>
            </div>
          </div>
        </div>
        <div className={styles.itemsBackground2}>
          <div className={styles.frameParent}>
            <div className={styles.e2f53738fa30a7e1cc88e61261c33Wrapper}>
              <img
                className={styles.e2f53738fa30a7e1cc88e61261c33Icon}
                loading="lazy"
                alt=""
                src="/102e2f53738fa30a7e1cc88e61261c33-1@2x.png"
              />
            </div>
            <div className={styles.muttonWrapper}>
              <div className={styles.mutton}>Mutton</div>
            </div>
          </div>
        </div>
        <div className={styles.itemsBackground3}>
          <div className={styles.frameGroup}>
            <div className={styles.frameChildWrapper}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/frame-180@2x.png"
            />
          </div>
            <div className={styles.chickenWrapper}>
              <div className={styles.chicken}>Chicken</div>
            </div>
          </div>
        </div>
        <div className={styles.itemsBackground4}>
          <div className={styles.frameContainer}>
            <div className={styles.c7228d74b38305bd6c483b4417d749Wrapper}>
              <img
                className={styles.c7228d74b38305bd6c483b4417d749Icon}
                loading="lazy"
                alt=""
                src="/9c7228d74b38305bd6c483b4417d749c-1@2x.png"
              />
            </div>
            <div className={styles.pannerWrapper}>
              <div className={styles.panner}>Panner</div>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.frameDiv}>
            <div className={styles.db17641d31c172d2b2739daf968cafWrapper}>
              <img
                className={styles.db17641d31c172d2b2739daf968cafIcon}
                loading="lazy"
                alt=""
                src="/db17641d31c172d2b2739daf968caf86-1@2x.png"
              />
            </div>
            <div className={styles.categoryRow1}>
              <div className={styles.mushroom}>Mushroom</div>
            </div>
          </div>
        </div>
        <div className={styles.container1}>
          <div className={styles.frameParent1}>
            <div className={styles.c0566b8ce26a85119cb9dbaff7221bWrapper}>
              <img
                className={styles.c0566b8ce26a85119cb9dbaff7221bIcon}
                loading="lazy"
                alt=""
                src="/c0566b8ce26a85119cb9dbaff7221bd4-1@2x.png"
              />
            </div>
            <div className={styles.mixVegWrapper}>
              <div className={styles.mixVeg}>Mix Veg</div>
            </div>
          </div>
        </div>
        <div className={styles.container2}>
          <div className={styles.frameParent2}>
            <div className={styles.cc60040982745633c1bf2492066174Parent}>
              <div className={styles.cc60040982745633c1bf2492066174} />
              <img
                className={styles.ea95a51eec22af22d0c30e56f9823Icon}
                loading="lazy"
                alt=""
                src="/356ea95a51eec22af22d0c30e56f9823-1@2x.png"
              />
            </div>
            <div className={styles.breadWrapper}>
              <div className={styles.bread}>Bread</div>
            </div>
          </div>
        </div>
        <div className={styles.container3}>
          <div className={styles.frameParent3}>
            <div className={styles.cc60040982745633c1bf2492066174Group}>
              <div className={styles.cc60040982745633c1bf24920661741} />
              <img
                className={styles.chirerPayeshPohaPuddingRecIcon}
                loading="lazy"
                alt=""
                src="/chirerpayeshpohapuddingrecipewithnolengur-1@2x.png"
              />
            </div>
            <div className={styles.dessertWrapper}>
              <div className={styles.dessert}>Dessert</div>
            </div>
          </div>
        </div>
        <div className={styles.itemsBackground5}>
          <div className={styles.frameParent4}>
            <div className={styles.cec90baa0f32f80373d70a611Wrapper}>
              <img
                className={styles.cec90baa0f32f80373d70a611Icon}
                loading="lazy"
                alt=""
                src="/21033241cec90baa0f32f80373d70a61-1@2x.png"
              />
            </div>
            <div className={styles.drinksWrapper}>
              <div className={styles.drinks}>Drinks</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

OURMENU.propTypes = {
  className: PropTypes.string,
};

export default OURMENU;