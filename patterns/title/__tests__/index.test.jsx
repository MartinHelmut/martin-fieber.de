import "jest-styled-components";
import React from "react";
import renderer from "react-test-renderer";

import Title from "../index";

describe("Title", () => {
  test("should render", () => {
    const tree = renderer.create(<Title>Main page title</Title>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
