import React from "react";
import renderer from "react-test-renderer";

import SubHeadline from "../index";

describe("SubHeadline", () => {
  test("should render", () => {
    const tree = renderer
      .create(<SubHeadline>Secondary headline</SubHeadline>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
