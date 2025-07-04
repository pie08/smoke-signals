"use client";

import { FC, useState } from "react";
import styles from "./Gallery.module.scss";
import { useLoadImage } from "./_lib/useLoadImages";
import Button from "@/app/_components/Button";
import { GALLERY_PAGE_SIZE } from "@/app/constants";
import { ManifestData } from "@/manifests/generateAssetsManifest";

interface GalleryProps {
  imagePaths: ManifestData[];
}

const Gallery: FC<GalleryProps> = ({ imagePaths }) => {
  // shop images show up first
  const sortedImagePaths = [...imagePaths].sort((a) => {
    if (a.path.includes("image/shop")) return 1;
    return -1;
  });
  // load images
  const { parentRef, mounted } = useLoadImage(sortedImagePaths);
  const width = mounted ? window.innerWidth : 0;

  if (!mounted) return null;

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
