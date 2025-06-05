import Container from "@/app/_components/Container";
import SubpageHeading from "@/app/_components/subpage/SubpageHeading";
import SubpageSection from "@/app/_components/subpage/SubpageSection";
import { FC } from "react";
import Gallery from "./Gallery";
import getAllImagePaths from "@/app/_lib/getAllImagePaths";
import { Metadata } from "next";

// add metadata
export const metadata: Metadata = {
  title: "GALLERY",
};

type pageProps = object;

const page: FC<pageProps> = async ({}) => {
  // get all images
  const imagePaths = await getAllImagePaths("/public/assets/images");
  console.log(imagePaths.slice(100));

  return (
    <SubpageSection fill>
      <SubpageHeading>GALLERY</SubpageHeading>

      <Container>
        <Gallery imagePaths={imagePaths} />
      </Container>
    </SubpageSection>
  );
};

export default page;
