import Container from "@/app/_components/Container";
import SubpageHeading from "@/app/_components/subpage/SubpageHeading";
import SubpageSection from "@/app/_components/subpage/SubpageSection";
import { FC } from "react";
import styles from "./Page.module.scss";
import { PiCaretRightBold } from "react-icons/pi";

type pageProps = object;

const page: FC<pageProps> = ({}) => {
  return (
    <SubpageSection fill>
      <SubpageHeading>
        <div className={styles.heading}>
          <h2>PRODUCTS</h2>

          <div className={styles.sort}>
            <p>SORT BY: </p>
            <p className={styles.sortCategory}>FEATURED</p>
            <PiCaretRightBold />
          </div>
        </div>
      </SubpageHeading>

      <Container>
        <p>products</p>
      </Container>
    </SubpageSection>
  );
};

export default page;
