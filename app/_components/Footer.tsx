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
          <a href="">(603) - 742 - 7473</a>
          <a href="">SMOKESIGNALSNH@GMAIL.COM</a>
        </div>

        <div className={styles.social}>
          <a href="">
            <PiFacebookLogoBold />
          </a>
          <a href="">
            <PiInstagramLogoBold />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
