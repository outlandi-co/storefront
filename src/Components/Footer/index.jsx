import React from 'react';
import styles from './Footer.module.scss'; // Import SCSS module

const Footer = () => (
  <footer className={styles.Footer}> {/* Use styles object */}
    <p>&copy; 2024 Virtual Store. All rights reserved.</p>
  </footer>
);

export default Footer;
