"use client";

import React, { FC } from "react";
import styles from "./Products.module.scss";
import { ProductData } from "../_types/ProductTypes.type";
import ProductCard from "./ProductCard";
import { useSearchParams } from "next/navigation";

type ProductsProps = {
  products: ProductData[];
};

const Products: FC<ProductsProps> = ({ products }) => {
  const filters = useSearchParams().get("filter");

  // filter products
  const filteredProducts = products.filter(({ type }) => {
    // if no filter show all
    if (filters === null || filters.length === 0) return true;

    // filter products
    return filters.includes(type);
  });

  return (
    <div className={styles.products}>
      {/* display prducts */}
      {filteredProducts.map((product, i) => (
        <ProductCard imageSrc={product.imageSrc} name={product.name} key={i} />
      ))}
    </div>
  );
};

export default Products;
