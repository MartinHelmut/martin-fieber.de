import React from "react";
import styled from "styled-components";

import Text from "../text";

const StyledAddress = styled.address`
  font-style: italic;
`;

const Address = ({ children }) => (
  <StyledAddress>
    <Text>{children}</Text>
  </StyledAddress>
);

export default Address;
