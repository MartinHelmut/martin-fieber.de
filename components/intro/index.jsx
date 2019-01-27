import React from "react";

import Text from "../../patterns/text";
import Link from "../../patterns/link";

const Intro = () => (
  <React.Fragment>
    <Text>
      I do JavaScript, TypeScript, Node.js, React, Machine Learning, Python,
      Reading, Writing or: stuff!
    </Text>
    <Text>
      Also Senior Product Engineer{" "}
      <Link
        href="https://sinnerschrader.com/"
        title="Website of SinnerSchrader"
      >
        @sinnerschrader
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
