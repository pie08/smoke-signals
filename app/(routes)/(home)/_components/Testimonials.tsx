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
    <Section dark>
      <Container>
        <h2>TESTIMONIALS</h2>
      </Container>

      <Container className={styles.testimonials}>
        <Testimonial
          text="Great place for all your needs. Friendly staff are very helpful in finding exactly what you you're looking for and the best prices anywhere. Great place to shop."
          author="Deb"
        />
        <Testimonial
          text="The shop is always stocked with tons of options for products, but staff makes this place amazing! All are very helpful and attentive to the customers needs. I never feel like they are pushing product. Keep doing what your doing!"
          author="Jay"
        />
        <Testimonial
          text="Great locally owned head shop. They have an awesome selection of glass pipes, water pipes, silicone pipes. And they carry something for every budget. Definitely one of the best priced, quality glass shops I've found. They also have a huge selection of vaporizers."
          author="Abbyt"
        />
        <Testimonial
          text="Great Smoke & Vape Shop!! The Staff are amazing! Friendly, very knowledgeable, professional, you never have to wait for service. Super low prices!! No other shop can beat their prices. The Shop is squeaky clean, fully stocked with possibly all of your vaping needs. Another plus is that they are dog friendly! My doggie always gets a treat! Now that's great service!"
          author="Janet"
        />
      </Container>

      <ButtonLink className={styles.buttonLink} href="/testimonials">
        SEE ALL TESTIMONIALS
      </ButtonLink>
    </Section>
  );
};

export default Testimonials;
