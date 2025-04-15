import { FC } from "react";
import styles from "./Testimonial.module.scss";

type TestimonialsProps = {
  text: string;
  author: string;
};

const Testimonial: FC<TestimonialsProps> = ({ author, text }) => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.quotes}>
        <p>&quot;</p>
        <p>&quot;</p>
      </div>

      <div className={styles.text}>
        <p>
          <span>{text.slice(0, 1)}</span>
          {text.slice(1)}
        </p>
        <h3 className={styles.customer}>- {author.toUpperCase()}</h3>
      </div>
    </div>
  );
};

export default Testimonial;
