import type { AboutSection } from "@jonsimeon/lib/db";
import { Heading } from "@jonsimeon/ui/react";
import Markdown from "react-markdown";

interface Props {
  sections: AboutSection[];
}

const AboutBody = ({ sections }: Props) => {
  return sections.map((s) => (
    <section className="mb-8">
      <Heading tagName="h2" size="h1" classes="mb-3 w-[30rem] text-accent">
        {s.heading}
      </Heading>
      <Markdown className="prose">{s.body}</Markdown>
    </section>
  ));
};

export default AboutBody;
