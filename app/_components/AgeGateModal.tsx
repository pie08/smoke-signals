"use client";

import { FC, SyntheticEvent } from "react";
import styles from "./AgeGateModal.module.scss";
import { ModalWindow, useModal } from "./Modal";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { setCookie } from "../_lib/actions";

type AgeGateModalProps = object;

const AgeGateModal: FC<AgeGateModalProps> = ({}) => {
  const { close } = useModal();
  const router = useRouter();

  return (
    <ModalWindow windowId="21modal" disableCloseButton>
      <div className={styles.modal}>
        <h3>Are you 21+</h3>
        <div>
          <form action={setCookie}>
            <Button className={styles.button} onClick={close}>
              YES
            </Button>
          </form>
          <Button className={styles.button} onClick={router.back}>
            NO
          </Button>
        </div>
      </div>
    </ModalWindow>
  );
};

export default AgeGateModal;
