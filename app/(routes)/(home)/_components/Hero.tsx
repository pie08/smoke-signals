import { FC } from "react";
import styles from "./Hero.module.scss";
import Container from "@/app/_components/Container";
import Section from "@/app/_components/Section";

type HeroProps = object;

const Hero: FC<HeroProps> = ({}) => {
  return (
    <Section className={styles.hero}>
      <Container className={styles.textContainer}>
        <h1>SMOKIN&apos; GOOD SINCE 2001</h1>
        <p>EVERYTHING YOU NEED FOR A HIGH QUALITY EXPERIENCE</p>
      </Container>
    </Section>
  );
};

export default Hero;
