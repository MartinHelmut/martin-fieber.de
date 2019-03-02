import React from "react";
import renderer from "react-test-renderer";

import Header from "../index";

describe("Header", () => {
  test("should render", () => {
    const tree = renderer.create(<Header>Top title</Header>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
