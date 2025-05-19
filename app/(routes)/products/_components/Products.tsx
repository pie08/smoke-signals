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
  return (
    <div className={styles.products}>
      {/* display prducts */}
      {products.map((product, i) => (
        <ProductCard
          imageSrc={product.imageSrc}
          name={product.name}
          key={product.imageSrc}
        />
      ))}
    </div>
  );
};

export default Products;
