import { FC, HTMLAttributes, ReactNode } from "react";
import styles from "./Section.module.scss";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  dark?: boolean;
  [x: string]: any;
}

const Section: FC<SectionProps> = ({ children, dark, ...props }) => {
  return (
    <section
      {...props}
      className={`${styles["section"]} ${dark ? styles.sectionDark : ""} ${
        props.className ?? ""
      }`}
    >
      {children}
    </section>
  );
};

export default Section;
