import { FC } from "react";
import ButtonLink from "./_components/ButtonLink";
import styles from "./notFound.module.scss";

type notFoundProps = object;

const notFound: FC<notFoundProps> = ({}) => {
  return (
    <div className={styles.notFound}>
      <p>404 | NOT FOUND</p>
      <h1>ARE YOU HIGH?</h1>
      <ButtonLink href="/">RETURN HOME</ButtonLink>
    </div>
  );
};

export default notFound;
