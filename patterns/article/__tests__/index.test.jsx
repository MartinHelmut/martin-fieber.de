import "jest-styled-components";
import React from "react";
import renderer from "react-test-renderer";

import Article from "../index";

describe("Article", () => {
  test("should render", () => {
    const tree = renderer
      .create(<Article>An interesting article</Article>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
