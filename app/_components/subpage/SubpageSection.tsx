import { FC, HTMLAttributes, ReactNode } from "react";
import styles from "./SubpageSection.module.scss";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  fill?: boolean;
  [x: string]: any;
}

const SubpageSection: FC<SectionProps> = ({ children, fill, ...props }) => {
  return (
    <section
      {...props}
      className={`${styles["section"]}${props.className ?? ""}
       ${fill ? styles.fill : ""}`}
    >
      {children}
    </section>
  );
};

export default SubpageSection;
