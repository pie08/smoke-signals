import Container from "@/app/_components/Container";
import Section from "@/app/_components/Section";
import { FC } from "react";
import styles from "./About.module.scss";
import Image from "next/image";
import aboutImage from "../../../../public/assets/images/shop/SMOKESIGNALS-39.jpg";

type AboutProps = object;

const About: FC<AboutProps> = ({}) => {
  return (
    <Section dark>
      <Container className={styles.about}>
        <div className={styles.textContainer}>
          <h2>ABOUT US</h2>
          <p>
            Smoke Signals provides the City of Dover and the surrounding
            seacoast with an unparalleled selection of high quality products at
            competitive prices. Our experienced and skilled team is committed to
            delivering outstanding customer service to guide you in your
            smokin&apos; journey. Whether you&apos;re looking to unwind,
            socialize or relax, we&apos;re here to provide a variety of choices
            and elevate your overall experience.
          </p>
        </div>

        <div className={styles.imageContainer}>
          <Image src={aboutImage} alt="Image of smoke signals shop" />
        </div>
      </Container>
    </Section>
  );
};

export default About;
