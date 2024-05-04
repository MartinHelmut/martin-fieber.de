import { DateTime } from "luxon";
import pluginRss from "@11ty/eleventy-plugin-rss";

/**
 * Copy static files like images, styles and scripts.
 */
function copyStaticFiles(eleventyConfig) {
  const staticResources = [
    "src/assets",
    "src/scripts",
    "src/_routes.json",
    "src/favicon.ico",
    "src/*.xsl",
    "src/style.css",
    "src/print.css",
  ];

  staticResources.forEach((resource) =>
    eleventyConfig.addPassthroughCopy(resource),
  );
}

/**
 * Add filter to format dates.
 */
function addDateFormatFilter(eleventyConfig) {
  eleventyConfig.addFilter("postDate", (dateObj) =>
    DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL),
  );

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter("htmlDateString", (dateObj) =>
    DateTime.fromJSDate(dateObj).toFormat("yyyy-LL-dd"),
  );
}

/**
 * Pick random item from collection.
 */
function addRandomItemFilter(eleventyConfig) {
  eleventyConfig.addFilter(
    "random",
    (items) => items[Math.floor(Math.random() * items.length)],
  );
}

export default function (eleventyConfig) {
  copyStaticFiles(eleventyConfig);
  addDateFormatFilter(eleventyConfig);
  addRandomItemFilter(eleventyConfig);

  eleventyConfig.addPlugin(pluginRss);

  return {
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
    },
  };
}
