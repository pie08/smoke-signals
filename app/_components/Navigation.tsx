"use client";

import Link from "next/link";
import React, { FC, useState } from "react";
import Container from "./Container";
import styles from "./Navigation.module.scss";
import {
  PiCaretDownBold,
  PiCaretLeftBold,
  PiCaretRightBold,
} from "react-icons/pi";
import { usePathname } from "next/navigation";

type NavigationProps = object;

const Navigation: FC<NavigationProps> = ({}) => {
  const pathname = usePathname();

  return (
    <header className={styles["header"]}>
      <Container>
        <nav className={styles["nav"]}>
          <ul className={styles["ul"]}>
            <li className={styles.navItem}>
              <Link
                className={`${styles.navLink} ${
                  pathname === "/" ? styles.active : ""
                }`}
                href={"/"}
              >
                HOME
              </Link>
            </li>

            {/* dropdown */}
            <Dropdown text="PRODUCTS">
              <Link className={`${styles.navLink}`} href={"/"}>
                GLASS
              </Link>
              <Link className={`${styles.navLink}`} href={"/"}>
                NICOTINE VAPES
              </Link>
              <Link className={`${styles.navLink}`} href={"/"}>
                HERBAL VAPES
              </Link>
              <Link className={`${styles.navLink}`} href={"/"}>
                CART BATTERIES
              </Link>
              <Link className={`${styles.navLink}`} href={"/"}>
                CIGARS
              </Link>
              <Link className={`${styles.navLink}`} href={"/"}>
                TOBACCO
              </Link>
              <Link className={`${styles.navLink}`} href={"/"}>
                KRATOM/CBD
              </Link>
            </Dropdown>

            <li className={styles.navItem}>
              <Link
                className={`${styles.navLink} ${
                  pathname === "/gallary" ? styles.active : ""
                }`}
                href={"/gallary"}
              >
                GALLARY
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                className={`${styles.navLink} ${
                  pathname === "/about" ? styles.active : ""
                }`}
                href={"/about"}
              >
                ABOUT
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                className={`${styles.navLink} ${
                  pathname === "/testimonials" ? styles.active : ""
                }`}
                href={"/testimonials"}
              >
                TESTIMONIALS
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

interface DropdownProps {
  children: React.ReactNode;
  text: string;
}

const Dropdown: FC<DropdownProps> = ({ children, text }) => {
  const [open, setOpen] = useState(false);

  return (
    <li
      className={`${styles["dropdownParent"]} ${styles.navItem}`}
      onClick={() => setOpen((curState) => !curState)}
    >
      <Link className={styles.navLink} href="">
        {text}
        <PiCaretRightBold style={{ transition: "all 0.2s" }} />
      </Link>

      <div className={styles.dropdownWrapper}>
        <li className={`${open ? "open" : ""} list ${styles.dropdownList}`}>
          {React.Children.map(children, (child, i) => (
            <li className={styles.navItem} key={i}>
              {child}
            </li>
          ))}
        </li>
      </div>
    </li>
  );
};

export default Navigation;
