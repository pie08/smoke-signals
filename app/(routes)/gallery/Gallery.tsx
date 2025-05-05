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
  const [page, setPage] = useState(1);
  const maxPage = Math.ceil(imagePaths.length / GALLERY_PAGE_SIZE);
  const images = imagePaths.slice(0, GALLERY_PAGE_SIZE * page);
  // load images
  const { parentRef, mounted } = useLoadImage(images);
  const width = mounted ? window.innerWidth : 0;

  function handleClick() {
    if (page + 1 > maxPage) return;
    setPage(Number(page) + 1);
  }

  if (!mounted) return null;

  return (
    <div className={styles.galleryWrapper}>
      <div className={styles.gallery} ref={parentRef}>
        <div></div>
        <div></div>
        {width > 496 ? <div></div> : null}
        {width > 496 ? <div></div> : null}
      </div>
      <Button btnStyle="underline" onClick={handleClick}>
        LOAD MORE
      </Button>
    </div>
  );
};

export default Gallery;
