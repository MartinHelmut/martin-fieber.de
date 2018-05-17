import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

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
                    <link rel="stylesheet" href="/_next/static/style.css" />
                    <style jsx global>{`
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
                            font-size: 1rem;
                            line-height: 1.65;
                            padding: 0;
                            margin: 0;
                        }
                    `}</style>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
