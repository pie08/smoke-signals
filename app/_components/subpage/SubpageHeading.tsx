import React, { Attributes, FC, HTMLAttributes } from "react";
import styles from "./SubpageHeading.module.scss";
import Container from "../Container";

interface SubpageHeadingProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  [x: string]: any;
}

const SubpageHeading: FC<SubpageHeadingProps> = ({ children, ...props }) => {
  return (
    <Container {...props} className={`${styles.heading} ${props.className}`}>
      <h2>{children}</h2>
    </Container>
  );
};

export default SubpageHeading;
