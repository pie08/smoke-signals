"use client";

import React, {
  ActionDispatch,
  createContext,
  FC,
  useContext,
  useReducer,
} from "react";
import {
  ContextState,
  FilterAction,
  FilterState,
  FilterValues,
} from "../_types/ProductTypes.type";

const initialState: FilterState = {
  glass: false,
  nicotineVapes: false,
  herbalVapes: false,
  cartBatteries: false,
  cigars: false,
  tobacco: false,
  kratom: false,
};

function filterReducer(state: FilterState, action: FilterAction) {
  switch (action.type) {
    case FilterValues.GLASS:
      return {
        ...state,
        glass: !state.glass,
      };
    case FilterValues.NVAPE:
      return {
        ...state,
        nicotineVapes: !state.nicotineVapes,
      };
    case FilterValues.HVAPE:
      return {
        ...state,
        herbalVapes: !state.herbalVapes,
      };
    case FilterValues.CBAT:
      return {
        ...state,
        cartBatteries: !state.cartBatteries,
      };
    case FilterValues.CIGARS:
      return {
        ...state,
        cigars: !state.cigars,
      };
    case FilterValues.TOBACCO:
      return {
        ...state,
        tobacco: !state.tobacco,
      };
    case FilterValues.KRATOM:
      return {
        ...state,
        kratom: !state.kratom,
      };
    case FilterValues.RESET:
      return initialState;
    default:
      return state;
  }
}

const ProductsContext = createContext<ContextState | null>(null);

type productsContextProps = {
  children: React.ReactNode;
};

const ProductsContextProvider: FC<productsContextProps> = ({ children }) => {
  const [filterState, dispatch] = useReducer(filterReducer, initialState);

  return (
    <ProductsContext.Provider value={{ state: filterState, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;

export function useProducts() {
  const context = useContext(ProductsContext);
  if (context === undefined)
    throw new Error("Product context used outside of provider");
  return context;
}
