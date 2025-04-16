import React, { FC } from "react";
import styles from "./SubpageHeading.module.scss";
import Container from "../Container";

type SubpageHeadingProps = {
  children: React.ReactNode;
};

const SubpageHeading: FC<SubpageHeadingProps> = ({ children }) => {
  return (
    <Container className={styles.heading}>
      <h2>{children}</h2>
    </Container>
  );
};

export default SubpageHeading;
