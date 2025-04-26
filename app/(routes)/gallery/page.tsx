import Container from "@/app/_components/Container";
import SubpageHeading from "@/app/_components/subpage/SubpageHeading";
import SubpageSection from "@/app/_components/subpage/SubpageSection";
import { FC } from "react";
import Gallery from "./Gallery";
import getAllImagePaths from "@/app/_lib/getAllImagePaths";

type pageProps = object;

const page: FC<pageProps> = async ({}) => {
  // get all images
  const imagePaths = await getAllImagePaths("/public/assets/images");

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
