import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  border-top: 1px solid var(--color-grey-500);
  margin: var(--size-700) 0 0 0;
  padding: var(--size-700) 0 0 0;
`;

const SectionHeadline = styled.h2`
  font-family: var(--base-font);
  font-size: 1.5em;
  font-weight: bold;
  line-height: 1.65;
  padding: 0;
  margin: 0;
`;

const Section = ({ children, headline }) => (
  <StyledSection>
    {headline ? <SectionHeadline>{headline}</SectionHeadline> : null}
    {children}
  </StyledSection>
);

export default Section;
