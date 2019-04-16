import "jest-styled-components";
import React from "react";
import renderer from "react-test-renderer";

import Headline from "../index";

describe("Headline", () => {
  test("should render", () => {
    const tree = renderer.create(<Headline>Headline text</Headline>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
