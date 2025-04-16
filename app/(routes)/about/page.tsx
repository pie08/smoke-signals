import SubpageHeading from "@/app/_components/subpage/SubpageHeading";
import SubpageSection from "@/app/_components/subpage/SubpageSection";
import { FC } from "react";
import Image from "next/image";
import aboutImage from "../../../public/assets/images/shop/SMOKESIGNALS-39.jpg";
import styles from "./About.module.scss";
import Container from "@/app/_components/Container";

type pageProps = object;

const page: FC<pageProps> = ({}) => {
  return (
    <SubpageSection fill>
      <SubpageHeading>ABOUT US</SubpageHeading>

      <Container fill className={styles.about}>
        <p>
          Smoke Signals provides the City of Dover and the surrounding seacoast
          with an unparalleled selection of high quality products at competitive
          prices. Our experienced and skilled team is committed to delivering
          outstanding customer service to guide you in your smokin&apos;
          journey. Whether you&apos;re looking to unwind, socialize or relax,
          we&apos;re here to provide a variety of choices and elevate your
          overall experience.
        </p>

        <div className={styles.imageContainer}>
          <Image src={aboutImage} alt="Image of smoke signals shop" />
        </div>
      </Container>
    </SubpageSection>
  );
};

export default page;
