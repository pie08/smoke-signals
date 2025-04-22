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
        <Image src={imageSrc} alt={name} fill />
      </div>

      <p>{name.toUpperCase()}</p>
    </div>
  );
};

export default ProductCard;
