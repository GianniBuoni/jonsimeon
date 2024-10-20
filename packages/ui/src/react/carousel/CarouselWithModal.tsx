// lib
import type { ProjectContext } from "@jonsimeon/lib/contexts";
import { ProjectProvider } from "@jonsimeon/lib/contexts";

// components
import CarouselCard from "#react/carousel/CarouselCard.tsx";
import ModalCard from "#react/modal/ModalCard.tsx";
import ModalBg from "#react/modal/ModalBg.tsx";

const CarouselWithModal = ({ assets, projects }: ProjectContext) => {
  return (
    <ProjectProvider assets={assets} projects={projects}>
      <ModalBg>
        <ModalCard />
      </ModalBg>
      <CarouselCard />
    </ProjectProvider>
  );
};

export default CarouselWithModal;
