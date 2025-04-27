import ParamSelect from "@/app/_components/ParamSelect";
import { FC, HTMLAttributes } from "react";
import styles from "./Sort.module.scss";

interface SortProps {
  className?: string;
}

const Sort: FC<SortProps> = ({ className = "" }) => {
  return (
    <div className={`${styles.sort} ${className}`}>
      <p>SORT BY:</p>
      <ParamSelect
        fieldName="sortBy"
        options={[
          { value: "all", label: "ALL" },
          { value: "featured", label: "FEATURED" },
          { value: "az", label: "NAME A-Z" },
          { value: "za", label: "NAME Z-A" },
        ]}
      />
    </div>
  );
};

export default Sort;
