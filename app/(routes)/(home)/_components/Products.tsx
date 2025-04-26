import Container from "@/app/_components/Container";
import Section from "@/app/_components/Section";
import { FC } from "react";
import styles from "./Products.module.scss";
import Link from "next/link";

type ProductsProps = object;

const Products: FC<ProductsProps> = ({}) => {
  return (
    <Section>
      <Container>
        <h2>PRODUCTS</h2>
      </Container>

      <Container className={styles.products}>
        <Link href="/products?sortBy=featured" className={styles.productCard}>
          <h2>SHOP FEATURED</h2>
        </Link>
        <Link href="/products?sortBy=all" className={styles.productCard}>
          <h2>SHOP ALL</h2>
        </Link>
      </Container>
    </Section>
  );
};

export default Products;
