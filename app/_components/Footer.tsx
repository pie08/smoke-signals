import { FC } from "react";
import { PiFacebookLogoBold, PiInstagramLogoBold } from "react-icons/pi";
import styles from "./Footer.module.scss";
import Container from "./Container";

type FooterProps = object;

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className={styles.footer}>
      <Container>
        <h3>SMOKIN&apos; GOOD SINCE 2001</h3>

        <div className={styles.contact}>
          <a href="tel:6037427473">(603) - 742 - 7473</a>
          <a href="mailto:smokesignalsnh@gmail.com">SMOKESIGNALSNH@GMAIL.COM</a>
        </div>

        <div className={styles.social}>
          <a href="https://www.facebook.com/smokesignalsnh/" target="_blank">
            <PiFacebookLogoBold />
          </a>
          <a
            href="https://www.instagram.com/smokesignalsdover/"
            target="_blank"
          >
            <PiInstagramLogoBold />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
