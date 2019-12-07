import React from "react";

import Text from "../../patterns/text";
import Link from "../../patterns/link";

const Intro = () => (
  <React.Fragment>
    <Text>
      I do JavaScript, C++, Python, Node.js, React, Reading, Writing or: stuff!
    </Text>
    <Text>
      Also Senior Software Developer{" "}
      <Link
        href="https://www.klarna.com/"
        title="Website of Klarna Smoooth Payments"
      >
        @Klarna
      </Link>
      , part-time project maintainer at{" "}
      <Link
        href="https://github.com/MartinHelmut"
        title="Link to my profile on Github."
      >
        Github
      </Link>{" "}
      and sometimes visible at{" "}
      <Link href="https://twitter.com/MartinFieber" title="My twitter profile">
        Twitter
      </Link>
      .
    </Text>
  </React.Fragment>
);

export default Intro;
