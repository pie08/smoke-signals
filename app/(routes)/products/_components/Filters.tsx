"use client";

import { FC, useReducer } from "react";
import styles from "./Filters.module.scss";
import { PiCheckBold } from "react-icons/pi";
import { useProducts } from "../context/productsContext";
import { FilterValues } from "../_types/ProductTypes.type";

type FiltersProps = object;

const Filters: FC<FiltersProps> = ({}) => {
  const context = useProducts();
  const { state: filterState, dispatch } = context!;

  return (
    <div className={styles.filterContainer}>
      <button onClick={() => dispatch({ type: FilterValues.RESET })}>
        REMOVE FILTERS
      </button>

      <div className={styles.filter}>
        <h4>TYPE</h4>
        <ul>
          <li>
            <input
              type="checkbox"
              name="glass"
              id="glass"
              checked={filterState.glass}
              onChange={() => dispatch({ type: FilterValues.GLASS })}
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
              checked={filterState.nicotineVapes}
              onChange={() => dispatch({ type: FilterValues.NVAPE })}
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
              name="nicotinePouches"
              id="nicotinePouches"
              checked={filterState.nicotinePouches}
              onChange={() => dispatch({ type: FilterValues.NPOUCH })}
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
              checked={filterState.herbalVapes}
              onChange={() => dispatch({ type: FilterValues.HVAPE })}
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
              checked={filterState.cartBatteries}
              onChange={() => dispatch({ type: FilterValues.CBAT })}
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
              checked={filterState.cigars}
              onChange={() => dispatch({ type: FilterValues.CIGARS })}
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
              checked={filterState.tobacco}
              onChange={() => dispatch({ type: FilterValues.TOBACCO })}
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
              checked={filterState.kratom}
              onChange={() => dispatch({ type: FilterValues.KRATOM })}
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
