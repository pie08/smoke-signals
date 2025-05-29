"use client";

import { Modal, ModalOpen, ModalWindow } from "@/app/_components/Modal";
import { FC } from "react";
import { PiSlidersBold } from "react-icons/pi";
import FilterModal from "./FilterModal";
import styles from "./Filters.module.scss";
import FilterSelect from "./FilterSelect";
import { useMounted } from "@/app/_lib/useMounted";

type FiltersProps = object;

const Filters: FC<FiltersProps> = ({}) => {
  const mounted = useMounted();
  const width = mounted ? window.innerWidth : 0;

  if (!mounted) return <div></div>;

  return (
    <>
      {/* modal is onyl for mobile filtering */}
      <ModalOpen opens="filter">
        <button className={styles.mobileFilters}>
          <PiSlidersBold />
          FILTER AND SORT
        </button>
      </ModalOpen>

      <ModalWindow windowId="filter">
        <FilterModal />
      </ModalWindow>

      {/* dont render in devices under 800px in width */}
      {width > 800 && <FilterSelect />}
    </>
  );
};

export default Filters;
