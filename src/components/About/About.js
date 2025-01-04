import styles from "./About.module.css";
import { FaShippingFast, FaHeadset, FaShieldAlt } from 'react-icons/fa';

export default function About() {
    return(
        <section className={styles.fake}>
        <div className={styles.header}>
          <div className={styles.headetTitle}>
            <h1>ABOUT UOMO</h1>
          </div>
          <div className={styles.headerContent}>
            <img src="/images/about.jpg" width={2000} height={2000} alt="about" />
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.Story}>
            <h3>OUR STORY</h3>
            <h4>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
  
            <p>Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule Evening Creepeth own lesser years itself so seed fifth for grass evening fourth shall you're unto that. Had. Female replenish for yielding so saw all one to yielding grass you'll air sea it, open waters subdue, hath. Brought second Made. Be. Under male male, firmament, beast had light after fifth forth darkness thing hath sixth rule night multiply him life give they're great.</p>
          </div>
  
          <div className={styles.flex}>
            <div className={styles.flexItems}>
              <h3>Our Mission</h3>
              <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className={styles.flexItems}>
              <h3>Our Vision</h3>
              <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
  
          <div className={styles.flex}>
            <div className={styles.flexItems}>
              <img src="/images/about-1.png" width={2000} height={2000} alt="about" />
  
            </div>
  
            <div className={styles.flexItems}>
              <h3>The Company</h3>
              <p className={styles.lorem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sapien dignissim a elementum. Sociis metus, hendrerit mauris id in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla massa est viverra interdum. Praesent auctor nulla morbi non posuere mattis. Arcu eu id maecenas cras..</p>
            </div>
          </div>
  
          <div className={styles.info}>
            <div className={styles.feature}>
              <FaShippingFast className={styles.icon} />
              <h3 className={styles.title}>FAST AND FREE DELIVERY</h3>
              <p className={styles.description}>Free delivery for all orders over $140</p>
            </div>
            <div className={styles.feature}>
              <FaHeadset className={styles.icon} />
              <h3 className={styles.title}>24/7 CUSTOMER SUPPORT</h3>
              <p className={styles.description}>Friendly 24/7 customer support</p>
            </div>
            <div className={styles.feature}>
              <FaShieldAlt className={styles.icon} />
              <h3 className={styles.title}>MONEY BACK GUARANTEE</h3>
              <p className={styles.description}>We return money within 30 days</p>
            </div>
          </div>
        </div>
      </section>
    )
}
