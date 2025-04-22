"use client";

import React, { FC } from "react";
import styles from "./Products.module.scss";
import { ProductData } from "../_types/ProductTypes.type";
import ProductCard from "./ProductCard";
import { useProducts } from "../context/productsContext";

type ProductsProps = {
  products: ProductData[];
};

const Products: FC<ProductsProps> = ({ products }) => {
  const { state } = useProducts()!;

  // if no filters
  const noFilters = !Object.entries(state).some(
    ([key, value]) => value === true
  );
  console.log(noFilters);

  // filter products
  const filteredProducts = products.filter(({ type }) => {
    // if no filter show all
    if (noFilters) {
      return true;
    }
    return state[type];
  });

  return (
    <div className={styles.products}>
      {filteredProducts.map((product, i) => (
        <ProductCard imageSrc={product.imageSrc} name={product.name} key={i} />
      ))}
    </div>
  );
};

export default Products;
