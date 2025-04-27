import { FC } from "react";
import styles from "./ProductCard.module.scss";
import Image from "next/image";

interface ProductCardProps {
  imageSrc: string;
  name: string;
}

const ProductCard: FC<ProductCardProps> = ({ imageSrc, name }) => {
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

      <p>{name.toUpperCase()}</p>
    </div>
  );
};

export default ProductCard;
