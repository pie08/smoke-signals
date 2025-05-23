import { FC } from "react";
import styles from "./ProductCard.module.scss";
import Image from "next/image";
import { ProductData } from "../_types/ProductTypes.type";

interface ProductCardProps {
  product: ProductData;
}

const ProductCard: FC<ProductCardProps> = ({
  product: { imageSrc, name, isFeatured },
}) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <Image
          src={imageSrc}
          alt={name}
          fill
          sizes="278px, (max-width: 68.75em) 233px, (max-width: 60em) 203px, (max-width: 50em) 241px, (max-width: 31em) 22px, (max-width: 22em) 150px"
        />
      </div>

      {isFeatured && <p className={styles.featured}>FEATURED</p>}

      <p>{name.toUpperCase()}</p>
    </div>
  );
};

export default ProductCard;
