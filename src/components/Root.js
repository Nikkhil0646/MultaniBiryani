import PropTypes from "prop-types";
import styles from "./Root.module.css";

const Root = ({ className = "" }) => {
  return (
    <div className={[styles.root, className].join(" ")}>
      <div className={styles.layout}>
        <div className={styles.detailsWrapper}>
          <div className={styles.details}>
            <div className={styles.amritSaini}>Amrit Saini</div>
            <div className={styles.bhubaneswar}>Bhubaneswar</div>
          </div>
        </div>
        <h3 className={styles.multaniBiryaniNorth}>
          Multani Biryani: North Indian bliss in Bhubaneswar. Flavorful, cozy,
          and a must-visit gem for food lovers.
        </h3>
      </div>
      <div className={styles.layout1}>
        <div className={styles.layoutInner}>
          <div className={styles.kashyapDuttaParent}>
            <div className={styles.kashyapDutta}>Kashyap Dutta</div>
            <div className={styles.kiitCollege}>KIIT College</div>
          </div>
        </div>
        <h3 className={styles.theRestaurantsSetting}>
          The restaurant's setting adds to the overall dining experience,
          providing a warm and inviting atmosphere that complements the
          flavorful North Indian cuisine served.
        </h3>
      </div>
      <div className={styles.layout2}>
        <div className={styles.layoutChild}>
          <div className={styles.sushreePradhanParent}>
            <div className={styles.sushreePradhan}>Sushree Pradhan</div>
            <div className={styles.bhubaneswar1}>Bhubaneswar</div>
          </div>
        </div>
        <h3 className={styles.iStumbledUponMultani}>
          I stumbled upon Multani Biryani while exploring the city, and it
          turned out to be a fantastic find The flavors are rich and authentic,
          and the prices are incredibly reasonable.
        </h3>
      </div>
    </div>
  );
};

Root.propTypes = {
  className: PropTypes.string,
};

export default Root;
