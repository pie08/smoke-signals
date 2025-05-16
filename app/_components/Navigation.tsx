"use client";

import Link from "next/link";
import React, {
  cloneElement,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Container from "./Container";
import styles from "./Navigation.module.scss";
import {
  PiCaretDownBold,
  PiCaretLeftBold,
  PiCaretRightBold,
} from "react-icons/pi";
import { usePathname } from "next/navigation";
import { FilterValues } from "../(routes)/products/_types/ProductTypes.type";
import Button from "./Button";

type NavigationProps = object;

const Navigation: FC<NavigationProps> = ({}) => {
  // mobile navigation open state
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLUListElement | null>(null);
  const pathname = usePathname();

  const close = useCallback(() => setOpen(false), []);

  return (
    <header className={`${styles["header"]}`}>
      <Container>
        {/* mobile nav button */}
        <button
          className={`${styles.menuButton}`}
          onClick={() => setOpen(true)}
        >
          <span></span>
        </button>

        <nav className={`${styles["nav"]} ${open ? styles.open : ""}`}>
          {/* mobile close button */}
          <Button className={styles.mobileClose} onClick={() => setOpen(false)}>
            CLOSE
          </Button>

          <ul className={styles["ul"]} ref={navRef}>
            <li className={styles.navItem}>
              <Link
                onClick={close}
                className={`${styles.navLink} ${
                  pathname === "/" ? styles.active : ""
                }`}
                href={"/"}
              >
                HOME
              </Link>
            </li>

            {/* dropdown */}
            <Dropdown text="PRODUCTS" close={close}>
              <Link
                className={`${styles.navLink}`}
                href={`/products?filter=${FilterValues.GLASS}`}
              >
                GLASS
              </Link>
              <Link
                className={`${styles.navLink}`}
                href={`/products?filter=${FilterValues.DVAPE}`}
              >
                DISPOSABLE VAPES
              </Link>
              <Link
                className={`${styles.navLink}`}
                href={`/products?filter=${FilterValues.RVAPE}`}
              >
                REFILLABLE VAPES
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
                onClick={close}
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
                onClick={close}
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
                onClick={close}
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
  close?: () => void;
}

const Dropdown: FC<DropdownProps> = ({ children, text, close }) => {
  const [open, setOpen] = useState(false);

  return (
    <li
      className={`${styles["dropdownParent"]} ${styles.navItem}`}
      onClick={() => setOpen((curState) => !curState)}
    >
      <a className={styles.navLink}>
        {text}
        <PiCaretRightBold style={{ transition: "all 0.2s" }} />
      </a>

      <div className={styles.dropdownWrapper}>
        <ul
          className={`${open ? styles.open : ""} list ${styles.dropdownList}`}
        >
          <li className={styles.navItem}>
            <Link
              className={`${styles.navLink}`}
              href={`/products`}
              onClick={close}
            >
              ALL PRODUCTS
            </Link>
          </li>
          {React.Children.map(children, (child, i) => (
            <li className={styles.navItem} key={i}>
              {cloneElement(
                child as React.ReactElement<{ onClick: () => void }>,
                { onClick: close }
              )}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default Navigation;
