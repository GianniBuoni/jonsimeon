import React, { useContext } from "react";
import ModalBg from "#react/modal/ModalBg";
import Carousel from "./Carousel";
import Icon from "#react/Icon";
import { ProjectContext } from "@jonsimeon/lib/contexts";
import { useCarouselStore, useModalStore } from "@jonsimeon/lib/stores";
import type { DirectusFile, ProjectsFiles } from "@jonsimeon/lib/db";
import CarouselControls from "./CarouselControls";
import ModalButton from "#react/modal/ModalButton";

const FullCarousel = () => {
  const { projects } = useContext(ProjectContext);
  const { page, deselect } = useModalStore();
  const currentImage = useCarouselStore();

  const dFile = projects[page].carousel_image[
    currentImage.page
  ] as ProjectsFiles;

  const image = dFile.directus_files_id as DirectusFile;

  return (
    <ModalBg resetCarousel={false} classes="flex-col">
      <button
        className="hover:scale-125 transition-transform z-30 fixed right-5 top-5"
        onClick={() => deselect!()}
      >
        <Icon icon="mdi:close-circle" size="2rem" className="text-neutral" />
      </button>
      <CarouselControls
        store="carousel"
        classes="z-30 absolute p-5"
        textVisisble={false}
        settings={{
          maxLength: projects[page].carousel_image.length - 1,
          offset: 100,
        }}
      />
      <Carousel includeBg={false} classes="max-w-screen-xl" />
      <p>{image.description}</p>
    </ModalBg>
  );
};

export default FullCarousel;
