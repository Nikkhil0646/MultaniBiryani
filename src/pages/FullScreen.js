import Content from "../components/Content";
import GalleryHeader from "../components/GalleryHeader";
import MainFrame from "../components/MainFrame";
import Ratings from "../components/Ratings";
import Root from "../components/Root";
import ScrollSlideshow from "../components/ScrollSlideshow";
import styles from "./FullScreen.module.css";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
</style>;

const FullScreen = () => {
  return (
    <div className={styles.fullScreen}>
      <MainFrame />
      <Content />
      <div className={styles.offerWrapper}>
        <div className={styles.offer}>
          <img
            className={styles.offerSection1}
            alt=""
            src="/offer-section-1@2x.png"
          />
          <img
            className={styles.cabfcc101fa6f6d99b3c07e9997f7cIcon}
            alt=""
            src="/cabfcc101fa6f6d99b3c07e9997f7c47-11@2x.png"
          />
          <div className={styles.offerInner}>
            <div className={styles.grabOurParent}>
              <h1 className={styles.grabOur}>Grab Our</h1>
              <h2 className={styles.offer1}>Offer</h2>
              <h2 className={styles.onBiryani}>on Biryani</h2>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.galleryContentParent}>
        <div className={styles.galleryContent}>
          <GalleryHeader />
          <div className={styles.scrollsection}>
            <ScrollSlideshow />
          </div>
          <div className={styles.testimonialContentParent}>
            <div className={styles.testimonialContent}>
              <div className={styles.testimonialQuestion}>
                <div className={styles.whyPeoplesChoose}>
                  Why Peoples Choose Us ?
                </div>
              </div>
              <div className={styles.ppls}>
                <div className={styles.ambiencepart}>
                  <div className={styles.testimonialImage}>
                    <img
                      className={styles.cameraSparklesUndefined}
                      alt=""
                      src="/camera-sparkles--undefined--glyph-undefined.svg"
                    />
                  </div>
                  <div className={styles.testimonialHeaderItems}>
                    <div className={styles.ambience}>Ambience</div>
                  </div>
                  <div className={styles.testimonialDescription}>
                    <div className={styles.relaxInStyle}>
                      RELAX IN STYLE AT OUR CAFÉ. CHOOSE A COZY SPOT, SIP YOUR
                      FAVORITE DRINK, AND SAVOR THE WELCOMING AMBIANCE WE OFFER
                    </div>
                  </div>
                </div>
                <div className={styles.hospitalitypart}>
                  <div className={styles.testimonialImage}>
                    <img
                      className={styles.peopleUndefinedGlyphUn}
                      alt=""
                      src="/people--undefined--glyph-undefined.svg"
                    />
                  </div>
                  <div className={styles.testimonialHeaderItems}>
                    <div className={styles.hospitality}>Hospitality</div>
                  </div>
                  <div className={styles.testimonialDescription}>
                    <div className={styles.hereAreSome}>
                      {`DEDICATED TEAM, ELEVATING YOUR CAFE EXPERIENCE WITH EXCEPTIONAL SERVICE, WARMTH, AND A PASSION for hopitality `}
                    </div>
                  </div>
                </div>
                <div className={styles.delightsparts}>
                  <div className={styles.testimonialImage}>
                    <img
                      className={styles.foodCakeUndefinedGlyph}
                      alt=""
                      src="/food-cake--undefined--glyph-undefined.svg"
                    />
                  </div>
                  <div className={styles.testimonialHeaderItems}>
                    <div className={styles.delights}>Delights</div>
                  </div>
                  <div className={styles.testimonialDescription}>
                    <div className={styles.relaxInStyle}>
                      {`SENSATIONAL FLAVORS AND CULINARY MASTERY UNITE IN ICONIC
                      DELIGHTS, CREATING AN UNFORGETTABLE DINING for all `}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.reviewContent}>
              <div className={styles.reviewHeading}>
                <div className={styles.whyPeoplesChoose}>
                  What Our Visitors Says
                </div>
                <div className={styles.review}>
                  <Root />
                </div>
              </div>
              {/* <div className={styles.reviewStars}>
                    <div className={styles.androidSmall8}>
                      <p className={styles.comments}>
                        <h3>ABHI</h3>
                        The food was delicious with the spacious restro.
                      </p>
                    </div>
                    <div className={styles.androidSmall8}>
                      <p className={styles.comments}>
                        <h3>NITIN</h3>
                        The food was delicious with the spacious restro.
                      </p>
                    </div>
                    <div className={styles.androidSmall8}>
                      <p className={styles.comments}>
                        <h3>SAMBHU</h3>
                        The food was delicious with the spacious restro.
                      </p>
                    </div>

                    <div className={styles.androidSmall8}>
                      <p className={styles.comments}>
                        <h3>JAYA</h3>
                        The food was delicious with the spacious restro.
                      </p>
                    </div>
                  </div>*/}
            </div>
            {/* <div className={styles.writeReview}>
                  <div className={styles.writeReviewButtonBackgroundParent}>
                    <div className={styles.writeReviewButtonBackground} />
                    <div className={styles.writeAReview}>WRITE A REVIEW</div>
                  </div>
                </div> */}

            <div className={styles.teamWrapper}>
              <div className={styles.team}>
                <img
                  className={styles.bcd77feef1331310a33c161e0cc002Icon}
                  alt=""
                  src="/4bcd77feef1331310a33c161e0cc0027-1@2x.png"
                />
                <div className={styles.ourWrapper}>
                  <div className={styles.our}>our</div>
                </div>
                <div className={styles.team1}>TEAM</div>
                <div className={styles.hoverContent}>
                  <p className={styles.hoverParagraph}>
                    Step into Multani Biryani and meet our tight-knit team
                    dedicated to crafting your perfect experience. From our
                    expert Barista to our creative minds shaping the ambiance,
                    each member plays a vital role. Friendly service, expertly
                    brewed coffee, and creative culinary delights - it's all
                    about creating memorable moments. Join us at Multani
                    Biryani, where every visit is a blend of passion and
                    perfection.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.rating}>
              <Ratings />
            </div>
            <div className={styles.footerAppStore}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14970.077240811266!2d85.844798!3d20.278761!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7e2035f9875%3A0x4f2648b31655a513!2sMultani%20Biryani!5e0!3m2!1sen!2sin!4v1723239760680!5m2!1sen!2sin"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className={styles.mapIframe}
              ></iframe>
            </div>
            <div className={styles.footerBranding}>
              <div className={styles.footerLogo}>
                <img
                  className={styles.multaniBiryaniMainLogo1}
                  alt=""
                  src="/multani-biryani-main-logo-11@2x.png"
                />
              </div>
              <div className={styles.footerForm}>
                <a href="mailto:dhabamungeri@gmail.com">
                  <div className={styles.footerFormBackgroundParent}>
                    <div className={styles.writeReviewButtonBackground} />
                    <img
                      className={styles.userCicrleIcon}
                      alt=""
                      src="/User_cicrle@2x.png"
                    />
                    <div className={styles.footerFormLabel}>
                      <div className={styles.writeYourQueries}>
                        ASK US SOMETHING
                      </div>
                    </div>
                  </div>
                </a>
                <div className={styles.address}>
                  Shanti Chowk, Jamnagar, Near KIIT Square, Bhubneswar,Orissa,
                  728192
                </div>

                <div className={styles.website}>www.multanibiryani.in</div>

                <div className={styles.footerSocial}>
                  <div className={styles.footerSocialIcons}>
                    <a href="https://www.facebook.com/profile.php?id=100064020726459">
                      <img
                        className={styles.socialIcons}
                        alt=""
                        src="/social-icons.svg"
                      />
                    </a>
                    <a href="https://www.instagram.com/multanibiryani?igsh=ZmQwZ2R0a2xtYncz&utm_source=qr">
                      <img
                        className={styles.socialIcons1}
                        alt=""
                        src="/social-icons1.svg"
                      />
                    </a>
                    <img
                      className={styles.socialIcons2}
                      alt=""
                      src="/social-icons2.svg"
                    />
                    <a href="https://www.instagram.com/multanibiryani?igsh=ZmQwZ2R0a2xtYncz&utm_source=qr">
                      <img
                        className={styles.socialIcons1}
                        alt=""
                        src="/social-icons3.svg"
                      />
                    </a>
                    <a href="https://www.instagram.com/multanibiryani?igsh=ZmQwZ2R0a2xtYncz&utm_source=qr">
                      <img
                        className={styles.socialIcons1}
                        alt=""
                        src="/social-icons4.svg"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.contact}>
                Contact us : +91 8232373289, +91 2323898293
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreen;
