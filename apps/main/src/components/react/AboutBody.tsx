import type { AboutSection } from "@jonsimeon/lib/db";
import { Heading } from "@jonsimeon/ui/react";
import Markdown from "react-markdown";

interface Props {
  sections: AboutSection[];
}

const AboutBody = ({ sections }: Props) => {
  return sections.map((s) => (
    <section>
      <Heading tagName="h2" size="h1" addMargin={false} classes="mb-3">
        {s.heading}
      </Heading>
      <Markdown>{s.body}</Markdown>
    </section>
  ));
};

export default AboutBody;
