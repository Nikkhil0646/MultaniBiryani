import styles from "./Gallery.module.css";

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <img className={styles.galleryChild} alt="" src="/frame-188.svg" />
      <section className={styles.arrowDownUndefinedGlyphParent}>
        <img
          className={styles.arrowDownUndefinedGlyph}
          loading="lazy"
          alt=""
          src="/arrow-down--undefined--glyph-undefined@2x.png"
        />
        <a className={styles.photoGallery}>Photo Gallery</a>
        <textarea className={styles.galleryBackground} rows={11} cols={15} />
      </section>
      <section className={styles.vectorParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/rectangle-85.svg"
        />
        <img
          className={styles.frameItem}
          loading="lazy"
          alt=""
          src="/rectangle-85.svg"
        />
      </section>
      <img className={styles.galleryItem} alt="" src="/rectangle-87.svg" />
    </div>
  );
};

export default Gallery;