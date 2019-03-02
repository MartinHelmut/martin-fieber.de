import React from "react";
import renderer from "react-test-renderer";

import Footer from "../index";

describe("Footer", () => {
  test("should render", () => {
    const tree = renderer.create(<Footer>Bottom data</Footer>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
