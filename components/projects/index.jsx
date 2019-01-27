import React from "react";

import Section from "../../patterns/section";
import Article from "../../patterns/article";
import TextHeading from "../../patterns/text-heading";
import Text from "../../patterns/text";
import Link from "../../patterns/link";

import { projects } from "./projects";

const Projects = () => (
  <Section headline="Github Projects">
    {projects.map(({ name, description, link, docs }) => (
      <Article key={name}>
        <TextHeading>{name}</TextHeading>
        <Text>{description}</Text>
        <Text>
          <Link href={link.href} title={link.title}>
            Visit project page
          </Link>
          {" | "}
          <Link href={docs.href} title={docs.title}>
            Documentation
          </Link>
        </Text>
      </Article>
    ))}
  </Section>
);

export default Projects;
