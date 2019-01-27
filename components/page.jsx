import React from "react";
import RouteLink from "next/link";
import Head from "next/head";

import StyleContext from "../patterns/style-context";
import Content from "../patterns/content";
import Header from "../patterns/header";
import Title from "../patterns/title";
import Link from "../patterns/link";
import Footer from "../patterns/footer";

const Page = ({ children, title = "", description = "" }) => (
  <StyleContext>
    <Head>
      <title>martin-fieber.de{title ? ` | ${title}` : ""}</title>
      {description && <meta type="description" content={description} />}
    </Head>
    <Content>
      <Header>
        <RouteLink href="/" passHref>
          <Link title="Take my back to start!">
            <Title>Martin Helmut Fieber</Title>
          </Link>
        </RouteLink>
      </Header>
      <main>{children}</main>
      <Footer>
        <RouteLink href="/legal-notice" passHref prefetch>
          <Link title="Legal notice page includes address and contact information">
            Legal notice
          </Link>
        </RouteLink>
        {" | "}
        <RouteLink href="/privacy-policy" passHref prefetch>
          <Link title="Privacy policy includes cookie information, but there are no cookies">
            Privacy policy
          </Link>
        </RouteLink>
        {" | "}
        <Link
          href="https://github.com/MartinHelmut/martin-fieber.de"
          title="View the sources of this website on Github"
        >
          Website sources
        </Link>
      </Footer>
    </Content>
  </StyleContext>
);

export default Page;
