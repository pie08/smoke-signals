"use client";

import { FC, useState } from "react";
import styles from "./ParamSelect.module.scss";
import { PiCaretRightBold } from "react-icons/pi";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useOutsideClick } from "../_lib/useOutsideClick";
import { createQueryString } from "../_lib/createQueryString";

type ParamSelectProps = {
  fieldName: string;
  options: {
    value: string;
    label: string;
  }[];
};

const ParamSelect: FC<ParamSelectProps> = ({ fieldName, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  // detect when click is outside of component
  const ref = useOutsideClick<HTMLButtonElement>(() => setIsOpen(false));

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  // get current query
  const currentQuery =
    options.filter((option) => option.value === params.get(fieldName))[0] ||
    options[0];

  return (
    <button
      className={`${styles.select} ${isOpen ? "open" : ""}`}
      onClick={() => setIsOpen((state) => !state)}
      ref={ref}
    >
      <p>{currentQuery.label}</p>
      <PiCaretRightBold />

      <ul className={`${styles.dropdown}`}>
        {options.map(({ value, label }) => {
          return (
            <li key={value}>
              <Link
                href={
                  pathname +
                  "?" +
                  createQueryString(fieldName, value, searchParams)
                }
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </button>
  );
};

export default ParamSelect;
