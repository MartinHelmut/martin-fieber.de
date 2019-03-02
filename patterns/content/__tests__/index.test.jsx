import React from "react";
import renderer from "react-test-renderer";

import Content from "../index";

describe("Content", () => {
  test("should render", () => {
    const tree = renderer.create(<Content>Much content</Content>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
