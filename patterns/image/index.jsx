import React from "react";
import styled from "styled-components";

const Figure = styled.figure`
  margin: 0 0 var(--size-500) 0;
  padding: 0;
  text-align: center;
`;

const Media = styled.img`
  height: auto;
  max-width: 100%;
`;

const Caption = styled.figcaption`
  color: var(--color-grey-500);
  font-family: var(--base-font);
  font-size: 0.8rem;
  font-weight: 300;
  line-height: 1.65;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const Image = ({ src, alt, width, height, caption }) => (
  <Figure>
    <Media src={src} alt={alt} width={width} height={height} />
    {caption ? <Caption>{caption}</Caption> : null}
  </Figure>
);

export default Image;
