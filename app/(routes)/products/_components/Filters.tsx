"use client";

import { FC, useEffect, useReducer, useState } from "react";
import styles from "./Filters.module.scss";
import { PiCheckBold } from "react-icons/pi";
import { FilterValues } from "../_types/ProductTypes.type";
import { arrToSearchParams } from "@/app/_lib/arrToSearchParams";
import { createQueryString } from "@/app/_lib/createQueryString";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type FiltersProps = object;

const Filters: FC<FiltersProps> = ({}) => {
  const [filters, setFilters] = useState<FilterValues[]>([]);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  function handleClick(type: FilterValues) {
    if (filters.includes(type)) {
      setFilters(filters.filter((filter) => filter !== type));
      return;
    }

    setFilters((filters) => [...filters, type]);
  }

  // update url on state change
  useEffect(() => {
    const query = createQueryString(
      "filter",
      arrToSearchParams(filters),
      searchParams
    );

    router.replace(pathname + "?" + query);
  }, [searchParams, pathname, router, filters]);

  return (
    <div className={styles.filterContainer}>
      <button onClick={() => setFilters([])}>REMOVE FILTERS</button>

      <div className={styles.filter}>
        <h4>TYPE</h4>
        <ul>
          <li>
            <input
              type="checkbox"
              name="glass"
              id="glass"
              checked={filters.includes(FilterValues.GLASS)}
              onChange={() => handleClick(FilterValues.GLASS)}
            />
            <label htmlFor="glass">
              GLASS
              <span>
                <PiCheckBold />
              </span>
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              name="nicotineVapes"
              id="nicotineVapes"
              checked={filters.includes(FilterValues.NVAPE)}
              onChange={() => handleClick(FilterValues.NVAPE)}
            />
            <label htmlFor="nicotineVapes">
              NICOTINE VAPES
              <span>
                <PiCheckBold />
              </span>
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              name="vapeJuice"
              id="vapeJuice"
              checked={filters.includes(FilterValues.VJUICE)}
              onChange={() => handleClick(FilterValues.VJUICE)}
            />
            <label htmlFor="vapeJuice">
              VAPE JUICE
              <span>
                <PiCheckBold />
              </span>
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              name="nicotinePouches"
              id="nicotinePouches"
              checked={filters.includes(FilterValues.NPOUCH)}
              onChange={() => handleClick(FilterValues.NPOUCH)}
            />
            <label htmlFor="nicotinePouches">
              NICOTINE POUCHES
              <span>
                <PiCheckBold />
              </span>
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              name="herbalVapes"
              id="herbalVapes"
              checked={filters.includes(FilterValues.HVAPE)}
              onChange={() => handleClick(FilterValues.HVAPE)}
            />
            <label htmlFor="herbalVapes">
              HERBAL VAPES
              <span>
                <PiCheckBold />
              </span>
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              name="cartBatteries"
              id="cartBatteries"
              checked={filters.includes(FilterValues.CBAT)}
              onChange={() => handleClick(FilterValues.CBAT)}
            />
            <label htmlFor="cartBatteries">
              CART BATTERIES
              <span>
                <PiCheckBold />
              </span>
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              name="cigars"
              id="cigars"
              checked={filters.includes(FilterValues.CIGARS)}
              onChange={() => handleClick(FilterValues.CIGARS)}
            />
            <label htmlFor="cigars">
              CIGARS
              <span>
                <PiCheckBold />
              </span>
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              name="tobacco"
              id="tobacco"
              checked={filters.includes(FilterValues.TOBACCO)}
              onChange={() => handleClick(FilterValues.TOBACCO)}
            />
            <label htmlFor="tobacco">
              TOBACCO
              <span>
                <PiCheckBold />
              </span>
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              name="kratom"
              id="kratom"
              checked={filters.includes(FilterValues.KRATOM)}
              onChange={() => handleClick(FilterValues.KRATOM)}
            />
            <label htmlFor="kratom">
              KRATOM/CBD
              <span>
                <PiCheckBold />
              </span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filters;
