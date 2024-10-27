import { DragCanvas, DragDiv } from "@jonsimeon/ui/react";

const FeaturedProjects = () => {
  return (
    <DragCanvas>
      <DragDiv classes="p-5 bg-neutral w-fit rounded shadow-hard">
        Drag me!
      </DragDiv>
    </DragCanvas>
  );
};

export default FeaturedProjects;
