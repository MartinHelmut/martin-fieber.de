import "jest-styled-components";
import React from "react";
import renderer from "react-test-renderer";

import Link from "../index";

describe("Image", () => {
  test("should render", () => {
    const tree = renderer
      .create(
        <Link href="#" title="Link title">
          Click me
        </Link>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
