import "jest-styled-components";
import React from "react";
import renderer from "react-test-renderer";

import Address from "../index";

describe("Address", () => {
  test("should render", () => {
    const tree = renderer.create(<Address>Home street 1</Address>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
