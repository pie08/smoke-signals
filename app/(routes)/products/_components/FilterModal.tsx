import { FC } from "react";
import styles from "./FilterModal.module.scss";
import FilterSelect from "./FilterSelect";
import Sort from "./Sort";

type FilterModalProps = object;

const FilterModal: FC<FilterModalProps> = ({}) => {
  return (
    <div className={styles.window}>
      <FilterSelect />
      <Sort />
    </div>
  );
};

export default FilterModal;
