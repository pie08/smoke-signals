"use client";

import React, { FC, HTMLAttributes } from "react";
import styles from "./Pagination.module.scss";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { createQueryString } from "@/app/_lib/createQueryString";

type PaginationProps = {
  page: number;
  maxPages: number;
};

interface PaginationButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  page: number;
  disabled?: boolean;
  [x: string]: any;
}

const Pagination: FC<PaginationProps> = ({ page, maxPages }) => {
  // get searchparams and pathname
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const currentPage = Number(params.get("page")) || 1;

  const collapseFront = currentPage > 3;
  const collapseBack = currentPage < maxPages - 3;

  function handleClick(page: number) {
    if (page < 1 || page > maxPages) return;

    const query = createQueryString("page", page, params);
    router.replace(pathname + "?" + query);
  }

  return (
    <div className={styles.pagination}>
      <PaginationButton
        disabled={currentPage === 1}
        page={currentPage}
        onClick={() => handleClick(page - 1)}
      >
        <PiCaretLeftBold />
      </PaginationButton>

      <PaginationButton page={currentPage} onClick={() => handleClick(1)}>
        1
      </PaginationButton>

      {!collapseFront &&
        Array.from({ length: 3 }).map((_, i) => (
          <PaginationButton
            page={currentPage}
            onClick={() => handleClick(i + 2)}
            key={i}
          >
            {i + 2}
          </PaginationButton>
        ))}
      {collapseFront && <p className={styles.paginationPlaceholder}>...</p>}

      {collapseBack &&
        collapseFront &&
        Array.from({ length: 3 }).map((_, i) => (
          <PaginationButton
            page={currentPage}
            onClick={() => handleClick(page - 1 + i)}
            key={i}
          >
            {page - 1 + i}
          </PaginationButton>
        ))}

      {collapseBack && <p className={styles.paginationPlaceholder}>...</p>}
      {!collapseBack &&
        Array.from({ length: 3 }).map((_, i) => (
          <PaginationButton
            page={currentPage}
            onClick={() => handleClick(maxPages - 3 + i)}
            key={i}
          >
            {maxPages - 3 + i}
          </PaginationButton>
        ))}

      <PaginationButton
        page={currentPage}
        onClick={() => handleClick(maxPages)}
      >
        {maxPages}
      </PaginationButton>

      <PaginationButton
        disabled={currentPage === maxPages}
        page={currentPage}
        onClick={() => handleClick(page + 1)}
      >
        <PiCaretRightBold />
      </PaginationButton>
    </div>
  );
};

const PaginationButton: FC<PaginationButtonProps> = ({
  children,
  page,
  disabled,
  ...props
}) => {
  return (
    <button
      className={`${styles.paginationButton} ${
        children?.toString() === page.toString() ? styles.active : ""
      } ${disabled ? styles.disabled : ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Pagination;
