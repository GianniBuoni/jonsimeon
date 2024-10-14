// lib
import type { ProjectContext } from "@lib/contexts/ProjectContext";
import ProjectProvider from "@lib/contexts/ProjectProvider";

// components
import CarouselCard from "@ui/react/carousel/CarouselCard";
import ModalCard from "@ui/react/modal/ModalCard";
import ModalBg from "@ui/react/modal/ModalBg";

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
