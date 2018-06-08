import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

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
        font-family: 'HelveticaNeue-Light',
            'Helvetica Neue Light', 'Helvetica Neue',
            Helvetica, Arial, 'Lucida Grande', sans-serif;
        font-weight: 300;
        font-size: 1.4rem;
        line-height: 1.65;
        padding: 0;
        margin: 0;
    }
`
};

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <html>
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
                    <link
                        rel="manifest"
                        href="/static/favicon/site.webmanifest"
                    />
                    <link
                        rel="mask-icon"
                        href="/static/favicon/safari-pinned-tab.svg"
                        color="#5bbad5"
                    />
                    <link
                        rel="shortcut icon"
                        href="/static/favicon/favicon.ico"
                    />
                    <meta name="msapplication-TileColor" content="#6200ee" />
                    <meta
                        name="msapplication-config"
                        content="/static/browserconfig.xml"
                    />
                    <meta name="theme-color" content="#ffffff" />
                    <link rel="stylesheet" href="/_next/static/style.css" />
                    <style dangerouslySetInnerHTML={globalStyle} />
                    <title>martin-fieber.de</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
