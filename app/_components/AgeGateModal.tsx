"use client";

import { FC } from "react";
import styles from "./AgeGateModal.module.scss";
import { ModalWindow, useModal } from "./Modal";
import Button from "./Button";
import { useRouter } from "next/navigation";

type AgeGateModalProps = object;

const AgeGateModal: FC<AgeGateModalProps> = ({}) => {
  const { close } = useModal();
  const router = useRouter();

  return (
    <ModalWindow windowId="21modal" disableCloseButton>
      <div className={styles.modal}>
        <h3>Are you 21+</h3>
        <div>
          <Button className={styles.button} onClick={close}>
            YES
          </Button>
          <Button className={styles.button} onClick={router.back}>
            NO
          </Button>
        </div>
      </div>
    </ModalWindow>
  );
};

export default AgeGateModal;
