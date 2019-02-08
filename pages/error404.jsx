import React from "react";
import RouteLink from "next/link";

import Headline from "../patterns/headline";
import Link from "../patterns/link";
import Page from "../components/page";
import Text from "../patterns/text";

const Error404 = () => (
  <Page title="page not found">
    <Headline>This page does not exist!</Headline>
    <Text>Mhh, strange, but it seems like this page does not exist 🤔</Text>
    <Text>
      You could write my what you expected here via my{" "}
      <RouteLink href="/legal-notice#contact" passHref>
        <Link title="Link that leads to the contact section of the legal notice page">
          contact information
        </Link>
      </RouteLink>{" "}
      or start new{" "}
      <RouteLink href="/" passHref>
        <Link title="This will take you back to start.">at home</Link>
      </RouteLink>
    </Text>
  </Page>
);

export default Error404;
