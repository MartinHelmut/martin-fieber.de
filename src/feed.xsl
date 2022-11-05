<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:atom="http://www.w3.org/2005/Atom">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="atom:feed">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title><xsl:value-of select="atom:title"/> Feed</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/assets/favicon/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/assets/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/assets/favicon/site.webmanifest" />
        <link rel="stylesheet" href="/style.css" />
        <meta name="theme-color" content="#ffffff" />
        <script
          async="async"
          defer="defer"
          data-domain="{{ site.name }}"
          src="https://analytics.martin-fieber.de/js/index.outbound-links.js"
        />
        <script>
          window.plausible =
            window.plausible ||
            (() => (window.plausible.q = window.plausible.q || []).push(arguments));
        </script>
      </head>
      <body>
        <div class="content">
          <header>
            <h1>
              <a title="Take my to the blog!">
                <xsl:attribute name="href">
                  <xsl:value-of select="atom:link[2]/@href"/>
                </xsl:attribute>
                <xsl:value-of select="atom:title"/>
              </a>
            </h1>
            <p>
              <xsl:value-of select="atom:subtitle"/>
            </p>
          </header>
          <main>
            <h2>Posts</h2>
            <xsl:for-each select="atom:entry">
              <article>
                <h3>
                  <a>
                    <xsl:attribute name="href">
                      <xsl:value-of select="atom:link/@href"/>
                    </xsl:attribute>
                    <xsl:value-of select="atom:title"/>
                  </a>
                </h3>
                <footer>
                  <p>
                    Posted on
                    <time>
                      <xsl:attribute name="datetime">
                        <xsl:value-of select="atom:published"/>
                      </xsl:attribute>
                      <xsl:value-of select="substring(atom:published, 0, 11)" />
                    </time>
                    <xsl:if test="atom:updated">
                      <span class="optional">
                        &#8212; Updated
                        <time>
                          <xsl:attribute name="datetime">
                            <xsl:value-of select="atom:updated"/>
                          </xsl:attribute>
                          <xsl:value-of select="substring(atom:updated, 0, 11)" />
                        </time>
                      </span>
                    </xsl:if>
                  </p>
                </footer>
                <xsl:value-of select="atom:summary" disable-output-escaping="yes" />
              </article>
            </xsl:for-each>
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
