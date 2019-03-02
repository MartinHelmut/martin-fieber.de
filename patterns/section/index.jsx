import React from "react";
import styled from "styled-components";

import Headline from "../headline";

const StyledSection = styled.section`
  border-top: 1px solid var(--color-grey-500);
  margin: var(--size-700) 0 0 0;
  padding: var(--size-700) 0 0 0;
`;

const SectionHeadline = styled(Headline)`
  margin: 0;
`;

const Section = ({ children, headline }) => (
  <StyledSection>
    {headline ? <SectionHeadline>{headline}</SectionHeadline> : null}
    {children}
  </StyledSection>
);

export default Section;
