import "jest-styled-components";
import React from "react";
import renderer from "react-test-renderer";

import TextHeading from "../index";

describe("TextHeading", () => {
  test("should render", () => {
    const tree = renderer
      .create(<TextHeading>Small text heading</TextHeading>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
