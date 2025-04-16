import SubpageHeading from "@/app/_components/subpage/SubpageHeading";
import SubpageSection from "@/app/_components/subpage/SubpageSection";
import { FC } from "react";
import styles from "./Testimonials.module.scss";
import Container from "@/app/_components/Container";
import Testimonial from "@/app/_components/Testimonial";

type pageProps = object;

const page: FC<pageProps> = ({}) => {
  return (
    <SubpageSection fill>
      <SubpageHeading>TESTIMONIALS</SubpageHeading>

      <Container fill className={styles.testimonials}>
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
    </SubpageSection>
  );
};

export default page;
