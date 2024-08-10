import PropTypes from "prop-types";
import styles from "./Ratings.module.css";

const Ratings = ({ className = "" }) => {
  return (
    <div className={[styles.ratings, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.div}>4.5+</div>
        <div className={styles.sourcesWrapper}>
          <div className={styles.sources}>
            <div className={styles.google}>
              <span>G</span>
              <span className={styles.o}>o</span>
              <span className={styles.o1}>o</span>
              <span>g</span>
              <span className={styles.l}>l</span>
              <span className={styles.e}>e</span>
            </div>
            <div className={styles.ratings1}>Ratings</div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.a}>100+</div>
        <div className={styles.reviewsWrapper}>
          <div className={styles.reviews}>Reviews</div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.a1}>999+</div>
        <div className={styles.customersWrapper}>
          <div className={styles.customers}>Customers</div>
        </div>
      </div>
    </div>
  );
};

Ratings.propTypes = {
  className: PropTypes.string,
};

export default Ratings;