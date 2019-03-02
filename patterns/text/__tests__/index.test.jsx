import React from "react";
import renderer from "react-test-renderer";

import Text from "../index";

describe("Text", () => {
  test("should render", () => {
    const tree = renderer.create(<Text>Regular text ...</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
