"use client";

import { FC } from "react";
import styles from "./error.module.scss";
import Button from "./_components/Button";

type errorProps = {
  error: Error;
  reset: () => void;
};

const error: FC<errorProps> = ({ error, reset }) => {
  return (
    <div className={styles.error}>
      <h1>SOMETHING WENT WRONG!</h1>
      <p>THE ERROR HAS BEEN REPORTED</p>
      <Button onClick={reset}>TRY AGAIN</Button>
    </div>
  );
};

export default error;
