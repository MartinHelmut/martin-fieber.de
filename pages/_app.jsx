import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";

// This is a workaround for the following bug:
// https://github.com/zeit/next.js/issues/3520
const globalStyle = {
  __html: `
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    body {
        padding: 0;
        margin: 0;
    }
`
};

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    if (Component.getInitialProps) {
      return await Component.getInitialProps(ctx);
    }

    return {};
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/static/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#6200ee" />
          <meta
            name="msapplication-config"
            content="/static/browserconfig.xml"
          />
          <meta name="theme-color" content="#ffffff" />
          <style dangerouslySetInnerHTML={globalStyle} />
          <title>martin-fieber.de</title>
          <meta
            name="description"
            content="My personal homepage including projects, things I do, and where I work. Also some social media where I am active."
          />
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}
