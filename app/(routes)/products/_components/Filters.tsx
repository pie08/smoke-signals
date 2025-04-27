import { Modal, ModalOpen, ModalWindow } from "@/app/_components/Modal";
import { FC } from "react";
import { PiSlidersBold } from "react-icons/pi";
import FilterModal from "./FilterModal";
import styles from "./Filters.module.scss";
import FilterSelect from "./FilterSelect";

type FiltersProps = object;

const Filters: FC<FiltersProps> = ({}) => {
  return (
    <Modal>
      {/* for mobile */}
      <ModalOpen opens="filter">
        <button className={styles.mobileFilters}>
          <PiSlidersBold />
          FILTER AND SORT
        </button>
      </ModalOpen>

      <ModalWindow windowId="filter">
        <FilterModal />
      </ModalWindow>

      <FilterSelect className={styles.filterSelect} />
    </Modal>
  );
};

export default Filters;
