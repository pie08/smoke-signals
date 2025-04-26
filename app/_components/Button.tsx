import React, { ButtonHTMLAttributes, FC } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  btnStyle?: "cta" | "gray";
  className?: string;
  [x: string]: any;
}

const Button: FC<ButtonProps> = ({
  children,
  btnStyle = "cta",
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${styles.button} ${styles[btnStyle]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
