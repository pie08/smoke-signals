"use client";

import { FC, useEffect, useRef } from "react";
import styles from "./Gallery.module.scss";
import Image from "next/image";
import { renderToStaticMarkup } from "react-dom/server";

type GalleryProps = {
  imagePaths: {
    path: string;
    width: number;
    height: number;
  }[];
};

const Gallery: FC<GalleryProps> = ({ imagePaths }) => {
  const parentRef = useRef<HTMLDivElement | null>(null);

  // dynamically place each image in the shortest column
  useEffect(() => {
    if (!parentRef.current) return;

    if (parentRef.current?.clientHeight > 0) return;

    imagePaths.forEach((image) => {
      if (!parentRef.current) return;

      // get shortest column
      const insertElement = Array.from(parentRef.current?.children).reduce(
        (prevElement, curElement) =>
          curElement.clientHeight < prevElement.clientHeight
            ? curElement
            : prevElement
      );

      // render image as html string
      const child = renderToStaticMarkup(
        <Image
          src={image.path}
          alt="Product image"
          width={image.width}
          height={image.height}
        />
      );

      // add html string to innerhtml
      insertElement.innerHTML = insertElement.innerHTML + child;
    });
  }, [imagePaths]);

  return (
    <div className={styles.gallery} ref={parentRef}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Gallery;
