"use client";

import { FC, useState } from "react";
import styles from "./Gallery.module.scss";
import { ImageData } from "@/app/_lib/getAllImagePaths";
import { useLoadImage } from "./_lib/useLoadImages";
import Button from "@/app/_components/Button";
import { GALLERY_PAGE_SIZE } from "@/app/constants";

interface GalleryProps {
  imagePaths: ImageData[];
}

const Gallery: FC<GalleryProps> = ({ imagePaths }) => {
  // load images
  const { parentRef, mounted } = useLoadImage(imagePaths);
  const width = mounted ? window.innerWidth : 0;

  if (!mounted) return null;

  // todo: make pages work work, maybe pass images as children into another component
  return (
    <div className={styles.galleryWrapper}>
      <div className={styles.gallery} ref={parentRef}>
        <div></div>
        <div></div>
        {width > 496 ? <div></div> : null}
        {width > 496 ? <div></div> : null}
      </div>
    </div>
  );
};

export default Gallery;
