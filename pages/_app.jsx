import React from "react";
import App from "next/app";
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
`,
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#6200ee" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="google-site-verification"
            content="pXBMFUxwvr8ZPU6AfU6XNt3rCCRtOC5bMe1N3REDrjI"
          />
          <style dangerouslySetInnerHTML={globalStyle} />
          <script
            async
            defer
            data-domain="martin-fieber.de"
            src="https://analytics.martin-fieber.de/js/index.outbound-links.js"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`,
            }}
          />
          <meta
            name="description"
            content="My personal homepage including projects, things I do, and where I work. Also some social media where I am active."
          />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
