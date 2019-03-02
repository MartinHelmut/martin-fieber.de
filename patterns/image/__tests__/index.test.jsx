import React from "react";
import renderer from "react-test-renderer";

import Image from "../index";

describe("Image", () => {
  test("should render", () => {
    const tree = renderer
      .create(
        <Image
          src="image.png"
          alt="Alternative text"
          width={500}
          height={500}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should render with caption", () => {
    const tree = renderer
      .create(
        <Image
          src="image.png"
          alt="Alternative text"
          width={500}
          height={500}
          caption="An image caption"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
