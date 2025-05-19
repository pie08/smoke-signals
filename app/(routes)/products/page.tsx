import Container from "@/app/_components/Container";
import SubpageHeading from "@/app/_components/subpage/SubpageHeading";
import SubpageSection from "@/app/_components/subpage/SubpageSection";
import { FC } from "react";
import styles from "./Page.module.scss";
import Products from "./_components/Products";
import { getProducts } from "./_lib/getProducts";
import Filters from "./_components/Filters";
import Sort from "./_components/Sort";
import { Metadata } from "next";
import Pagination from "./_components/Pagination";
import { PRODUCTS_PAGE_SIZE } from "@/app/constants";
import paginateProducts from "./_lib/paginateProducts";

// add metadata
export const metadata: Metadata = {
  title: "PRODUCTS",
};

type pageProps = {
  searchParams: Promise<any>;
};

const page: FC<pageProps> = async ({ searchParams }) => {
  const params = await searchParams;
  const sortBy = params.sortBy || "all";
  const page = Number(params.page) || 1;
  const filters = params.filter || null;
  // get products
  const products = await getProducts({ sortBy, filters });
  const paginatedProducts = paginateProducts(products, page);
  const maxPages = Math.ceil(products.length / PRODUCTS_PAGE_SIZE);
  console.log(products);

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
        <Products products={paginatedProducts} />
        <Pagination page={page} maxPages={maxPages} />
      </Container>
    </SubpageSection>
  );
};

export default page;
