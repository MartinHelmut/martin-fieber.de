<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="sitemap:urlset">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>Martin Helmut Fieber Sitemap</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/assets/favicon/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/assets/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/assets/favicon/site.webmanifest" />
        <link rel="stylesheet" href="/style.css" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <div class="content">
          <header>
            <h1>
              <a href="/" title="Take my back to start!">
                Martin Helmut Fieber
              </a>
            </h1>
          </header>
          <main>
            <h2>Links</h2>
            <p>
              This is a list of links to all available pages on my site.
            </p>
            <ul>
            <xsl:for-each select="sitemap:url">
              <li>
                <a>
                  <xsl:attribute name="href">
                    <xsl:value-of select="sitemap:loc"/>
                  </xsl:attribute>
                  <xsl:attribute name="title">Last updated: <xsl:value-of select="sitemap:lastmod"/></xsl:attribute>
                  <xsl:value-of select="substring(sitemap:loc, 25)"/>
                </a>
              </li>
            </xsl:for-each>
            </ul>
          </main>
          <footer>
            <a
              href="/legal-notice"
              title="Legal notice page includes address and contact information"
            >
              Legal notice
            </a>
            |
            <a
              href="/privacy-policy"
              title="Privacy policy includes cookie information, but there are no cookies"
            >
              Privacy policy
            </a>
            |
            <a href="/feed.xml" title="Atom feed">Feed</a>
            |
            <a
              href="/blog/my-blog"
              title="Additional information about this website, what to expect and how it was built."
            >
              About
            </a>
          </footer>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
