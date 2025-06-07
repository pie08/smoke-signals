import Container from "@/app/_components/Container";
import SubpageHeading from "@/app/_components/subpage/SubpageHeading";
import SubpageSection from "@/app/_components/subpage/SubpageSection";
import { FC } from "react";
import Gallery from "./Gallery";
import { Metadata } from "next";
import assetsManifest from "@/manifests/assets-manifest.json";

// add metadata
export const metadata: Metadata = {
  title: "GALLERY",
};

type pageProps = object;

const page: FC<pageProps> = async ({}) => {
  return (
    <SubpageSection fill>
      <SubpageHeading>GALLERY</SubpageHeading>

      <Container>
        <Gallery imagePaths={assetsManifest} />
      </Container>
    </SubpageSection>
  );
};

export default page;
