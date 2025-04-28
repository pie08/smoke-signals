import Container from "@/app/_components/Container";
import SubpageHeading from "@/app/_components/subpage/SubpageHeading";
import SubpageSection from "@/app/_components/subpage/SubpageSection";
import { FC } from "react";
import styles from "./Page.module.scss";
import ParamSelect from "@/app/_components/ParamSelect";
import ProductCard from "./_components/ProductCard";
import Products from "./_components/Products";
import { getProductsData } from "./_lib/getProductsData";
import Filters from "./_components/Filters";
import Sort from "./_components/Sort";
import { Metadata } from "next";

// add metadata
export const metadata: Metadata = {
  title: "PRODUCTS",
};

type pageProps = {
  searchParams: Promise<any>;
};

const page: FC<pageProps> = async ({ searchParams }) => {
  const products = await getProductsData();
  const params = await searchParams;
  const sortBy = params.sortBy;

  // todo: add featurted sort
  if (sortBy && sortBy === "az")
    products.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });

  if (sortBy && sortBy === "za")
    products.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    });

  return (
    <SubpageSection fill>
      <SubpageHeading>
        <div className={styles.heading}>
          <h2>PRODUCTS</h2>

          <Sort className={styles.sort} />
        </div>
      </SubpageHeading>
      <Container className={styles.columns}>
        <Filters />

        <Products products={products} />
      </Container>
    </SubpageSection>
  );
};

export default page;
