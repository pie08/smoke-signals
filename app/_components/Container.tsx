import { FC, HTMLAttributes, ReactNode } from "react";
import styles from "./Container.module.scss";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  [x: string]: any;
}

const Container: FC<ContainerProps> = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={`${styles["container"]} ${props.className ?? ""}`}
    >
      {children}
    </div>
  );
};

export default Container;
