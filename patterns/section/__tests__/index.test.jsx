import React from "react";
import renderer from "react-test-renderer";

import Section from "../index";

describe("Section", () => {
  test("should render", () => {
    const tree = renderer.create(<Section>Section content</Section>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should render with headline", () => {
    const tree = renderer
      .create(<Section headline="Section headline">Section content</Section>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
