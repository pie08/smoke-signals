import { ManifestData } from "@/manifests/generateAssetsManifest";
import { useMounted } from "@/app/_lib/useMounted";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { renderToString } from "react-dom/server";

export function useLoadImage(imagePaths: ManifestData[]) {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const mounted = useMounted();

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
      const child = renderToString(
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
  }, [imagePaths, mounted]);

  return { parentRef, mounted };
}
