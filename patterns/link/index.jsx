import styled from "styled-components";

const Link = styled.a`
  color: var(--color-blue-500);
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default Link;
