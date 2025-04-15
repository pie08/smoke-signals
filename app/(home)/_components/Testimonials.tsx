import Container from "@/app/_components/Container";
import Section from "@/app/_components/Section";
import { FC } from "react";
import styles from "./Testimonials.module.scss";
import Testimonial from "@/app/_components/Testimonial";
import Button from "@/app/_components/Button";
import ButtonLink from "@/app/_components/ButtonLink";

type TestimonialsProps = object;

const Testimonials: FC<TestimonialsProps> = ({}) => {
  return (
    <Section>
      <Container>
        <h2>TESTIMONIALS</h2>
      </Container>

      <Container className={styles.testimonials}>
        <Testimonial
          text="Lorem ipsum dolor sit amet consectetur. Quam ut lorem elementum adipiscing in integer. Eu dignissim vestibulum porttitor gravida non. Odio molestie leo laoreet arcu sit duis semper. Erat ut vitae tellus pulvinar eget et consectetur volutpat."
          author="tyrus"
        />
        <Testimonial
          text="Lorem ipsum dolor sit amet consectetur. Quam ut lorem elementum adipiscing in integer. Eu dignissim vestibulum porttitor gravida non. Odio molestie leo laoreet arcu sit duis semper. Erat ut vitae tellus pulvinar eget et consectetur volutpat."
          author="tyrus"
        />
        <Testimonial
          text="Lorem ipsum dolor sit amet consectetur. Quam ut lorem elementum adipiscing in integer. Eu dignissim vestibulum porttitor gravida non. Odio molestie leo laoreet arcu sit duis semper. Erat ut vitae tellus pulvinar eget et consectetur volutpat."
          author="tyrus"
        />
        <Testimonial
          text="Lorem ipsum dolor sit amet consectetur. Quam ut lorem elementum adipiscing in integer. Eu dignissim vestibulum porttitor gravida non. Odio molestie leo laoreet arcu sit duis semper. Erat ut vitae tellus pulvinar eget et consectetur volutpat."
          author="tyrus"
        />
      </Container>

      <ButtonLink className={styles.buttonLink} href="/testimonials">
        SEE ALL TESTIMONIALS
      </ButtonLink>
    </Section>
  );
};

export default Testimonials;
