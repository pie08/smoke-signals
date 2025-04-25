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
import { FilterValues } from "../(routes)/products/_types/ProductTypes.type";

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
              <Link
                className={`${styles.navLink}`}
                href={`/products?filter=${FilterValues.GLASS}`}
              >
                GLASS
              </Link>
              <Link
                className={`${styles.navLink}`}
                href={`/products?filter=${FilterValues.NVAPE}`}
              >
                NICOTINE VAPES
              </Link>
              <Link
                className={`${styles.navLink}`}
                href={`/products?filter=${FilterValues.VJUICE}`}
              >
                VAPE JUICE
              </Link>
              <Link
                className={`${styles.navLink}`}
                href={`/products?filter=${FilterValues.NPOUCH}`}
              >
                NICOTINE POUCHES
              </Link>
              <Link
                className={`${styles.navLink}`}
                href={`/products?filter=${FilterValues.HVAPE}`}
              >
                HERBAL VAPES
              </Link>
              <Link
                className={`${styles.navLink}`}
                href={`/products?filter=${FilterValues.CBAT}`}
              >
                CART BATTERIES
              </Link>
              <Link
                className={`${styles.navLink}`}
                href={`/products?filter=${FilterValues.CIGARS}`}
              >
                CIGARS
              </Link>
              <Link
                className={`${styles.navLink}`}
                href={`/products?filter=${FilterValues.TOBACCO}`}
              >
                TOBACCO
              </Link>
              <Link
                className={`${styles.navLink}`}
                href={`/products?filter=${FilterValues.KRATOM}`}
              >
                KRATOM/CBD
              </Link>
            </Dropdown>

            <li className={styles.navItem}>
              <Link
                className={`${styles.navLink} ${
                  pathname === "/gallery" ? styles.active : ""
                }`}
                href={"/gallery"}
              >
                GALLERY
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
      <Link className={styles.navLink} href="/products">
        {text}
        <PiCaretRightBold style={{ transition: "all 0.2s" }} />
      </Link>

      <div className={styles.dropdownWrapper}>
        <ul className={`${open ? "open" : ""} list ${styles.dropdownList}`}>
          {React.Children.map(children, (child, i) => (
            <li className={styles.navItem} key={i}>
              {child}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default Navigation;
