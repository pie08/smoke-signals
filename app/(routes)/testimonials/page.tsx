import SubpageHeading from "@/app/_components/subpage/SubpageHeading";
import SubpageSection from "@/app/_components/subpage/SubpageSection";
import { FC } from "react";
import styles from "./Testimonials.module.scss";
import Container from "@/app/_components/Container";
import Testimonial from "@/app/_components/Testimonial";
import { Metadata } from "next";

// add metadata
export const metadata: Metadata = {
  title: "TESTIMONIALS",
};

type pageProps = object;

const page: FC<pageProps> = ({}) => {
  return (
    <SubpageSection fill>
      <SubpageHeading>TESTIMONIALS</SubpageHeading>

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
        <Testimonial
          text="Very friendly and knowledgeable staff. Showed me how to use products before I left the store. 10/10"
          author="Heather"
        />
        <Testimonial
          text="They always have what I need when I need it for the best price. laways friendly and knowledgeable staff happy to answer whatever questions you many have. The only place I go for my vaping and Kratom needs."
          author="Ben"
        />
        <Testimonial
          text="I had a great experience here. The people behind the counter are very friendly and attentive to all experience levels. I have been to a lot of smoke shops in much larger cities that had a fraction of the selection that they have here. It's a great one stop shop for everything. Hookahs, shisha, glass, papers, pipes, tobacco, etc."
          author="Kaleigh"
        />
      </Container>
    </SubpageSection>
  );
};

export default page;
