import { FC, HTMLAttributes, ReactNode } from "react";
import styles from "./Section.module.scss";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  [x: string]: any;
}

const Section: FC<SectionProps> = ({ children, ...props }) => {
  return (
    <section
      {...props}
      className={`${styles["section"]} ${props.className ?? ""}`}
    >
      {children}
    </section>
  );
};

export default Section;
