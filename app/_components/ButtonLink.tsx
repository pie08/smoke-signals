import Link from "next/link";
import React, { AnchorHTMLAttributes, FC } from "react";
import styles from "./Button.module.scss";
import { PiArrowRightBold } from "react-icons/pi";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
  [x: string]: any;
}

const ButtonLink: FC<ButtonLinkProps> = ({ children, href, ...props }) => {
  return (
    <Link
      {...props}
      href={href}
      className={`${styles.buttonLink} ${props.className}`}
    >
      {children}
      <PiArrowRightBold />
    </Link>
  );
};

export default ButtonLink;
