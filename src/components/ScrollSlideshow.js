import React, { useEffect, useRef } from 'react';
import styles from './YourStyles.module.css'; // Adjust the import based on your styles

const ScrollSlideshow = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let intervalId;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        // Scroll by the width of the container to show the next image
        scrollContainer.scrollBy({
          left: scrollContainer.offsetWidth, 
          behavior: 'smooth',
        });

        // Reset to the first image after the last one
        if (scrollContainer.scrollLeft + scrollContainer.offsetWidth >= scrollContainer.scrollWidth) {
          scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }, 3500); // Change this value to adjust the scroll interval (in milliseconds)
    };

    startAutoScroll();

    return () => {
      clearInterval(intervalId); // Clear the interval on component unmount
    };
  }, []);

  return (
    <section className={styles.component3Parent}>
      {/* <h1 className={styles.specialities}>Specialities</h1> Heading positioned above the images */}
      <div
        className={styles.component3}
        ref={scrollRef}
      >
        <img
          className={styles.component3Child}
          loading="lazy"
          alt="Image 1"
          src="/frame-4@2x.png"
        />
        <img
          className={styles.component3Item}
          loading="lazy"
          alt="Image 2"
          src="/frame-5@2x.png"
        />
        <img
          className={styles.component3Inner}
          loading="lazy"
          alt="Image 3"
          src="/frame-6@2x.png"
        />
      </div>
    </section>
  );
};

export default ScrollSlideshow;
