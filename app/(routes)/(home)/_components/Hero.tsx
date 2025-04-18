import { FC } from "react";
import styles from "./Hero.module.scss";
import Container from "@/app/_components/Container";
import Section from "@/app/_components/Section";
import Image from "next/image";
import heroImage from "../../../../public/assets/images/shop/SMOKESIGNALS-48.jpg";

type HeroProps = object;

const Hero: FC<HeroProps> = ({}) => {
  return (
    <Section className={styles.hero}>
      <Container className={styles.textContainer}>
        <h1>SMOKIN&apos; GOOD SINCE 2001</h1>
        <p>EVERYTHING YOU NEED FOR A HIGH QUALITY EXPERIENCE</p>
      </Container>

      <Image src={heroImage} alt="Image of smoke signals shop" fill />
    </Section>
  );
};

export default Hero;
