import styled from "styled-components";

const Article = styled.article`
  border-bottom: 1px solid var(--color-grey-500);
  padding: var(--size-500) 0;
  margin: 0 0 var(--size-500) 0;

  &:last-child {
    border: 0;
    margin: 0;
  }
`;

export default Article;
