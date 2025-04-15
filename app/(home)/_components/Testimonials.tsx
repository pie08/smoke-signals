import Container from "@/app/_components/Container";
import Section from "@/app/_components/Section";
import { FC } from "react";
import styles from "./Testimonials.module.scss";

type TestimonialsProps = object;

const Testimonials: FC<TestimonialsProps> = ({}) => {
  return (
    <Section>
      <Container>
        <h2>TESTIMONIALS</h2>
      </Container>

      <Container>
        <p>testimonials</p>
      </Container>
    </Section>
  );
};

export default Testimonials;
