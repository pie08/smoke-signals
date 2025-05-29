"use client";

import React, {
  cloneElement,
  createContext,
  FC,
  useCallback,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";
import Button from "./Button";
import { useMounted } from "../_lib/useMounted";

const ModalContext = createContext({
  openId: "",
  open: (id: string) => {},
  close: () => {},
  key: 0,
});

type ModalProps = {
  children: React.ReactNode;
  defaultOpenId?: string;
};

interface WindowProps {
  children: React.ReactNode;
  windowId: string;
  disableCloseButton?: boolean;
}

interface OpenProps {
  children: React.ReactNode;
  opens: string;
}

interface ChildrenProps {
  onClick: () => void;
}

const Modal: FC<ModalProps> = ({ children, defaultOpenId = "" }) => {
  const [openId, setOpenId] = useState(defaultOpenId || "");
  const [key, setKey] = useState(0);

  function open(id: string) {
    setOpenId(id);
  }

  const close = useCallback(function () {
    setOpenId("");

    setTimeout(() => {
      setKey((n) => n + 1);
    }, 200);
  }, []);

  return (
    <ModalContext.Provider value={{ openId, open, close, key }}>
      {children}
    </ModalContext.Provider>
  );
};

const ModalWindow: FC<WindowProps> = ({
  children,
  windowId,
  disableCloseButton,
}) => {
  const { close, openId, key } = useContext(ModalContext);
  const open = openId === windowId;

  // ensure document is defined, aka component mounted
  const mounted = useMounted();
  if (!mounted) return null;

  return createPortal(
    <>
      <div
        className={`${styles.overlay} ${open ? styles.open : ""}`}
        onClick={!disableCloseButton ? close : () => {}}
      >
        &nbsp;
      </div>
      <div
        className={`${styles.window} ${open ? styles.open : ""} ${
          disableCloseButton ? styles.padTop : ""
        }`}
        key={key}
      >
        {!disableCloseButton && <Button onClick={() => close()}>CLOSE</Button>}
        <div>{children}</div>
      </div>
    </>,
    document.body
  );
};

const ModalOpen: FC<OpenProps> = ({ children, opens }) => {
  const { open } = useContext(ModalContext);

  return cloneElement(children as React.ReactElement<ChildrenProps>, {
    onClick: () => {
      open(opens);
    },
  });
};

export { Modal, ModalOpen, ModalWindow };

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("ModalContext used outside of provider");
  }
  return context;
};
