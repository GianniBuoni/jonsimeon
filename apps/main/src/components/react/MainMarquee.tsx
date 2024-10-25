import { Marquee } from "@jonsimeon/ui/react";
import { Icon } from "@jonsimeon/ui/react";

const MainMarquee = () => {
  return (
    <Marquee
      repeat={20}
      speed={10}
      classes="bg-base-300 text-neutral py-1 fixed top-0 z-30"
    >
      <div className="flex items-center gap-3">
        <span>
          Jon Simeon is a designer, illustrator, and programmer based in
          Massachusetts
        </span>
        <Icon icon="mdi:star" />
        <span>I'm currently looking for work &mdash; let's work together!</span>
        <Icon icon="mdi:star" />
      </div>
    </Marquee>
  );
};

export default MainMarquee;
