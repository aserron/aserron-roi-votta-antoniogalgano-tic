module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'src/static': '.' });

  eleventyConfig.addTransform('lf-eol', (_content, outputPath) => {
    if (outputPath && outputPath.endsWith('.html')) {
      return _content.replace(/\r\n/g, '\n');
    }
    return _content;
  });

  eleventyConfig.addCollection('glossary', (api) =>
    api.getFilteredByGlob('src/glossary/terms/*.md').sort((a, b) => a.data.term.localeCompare(b.data.term, 'es'))
  );

  eleventyConfig.addFilter('groupByCategory', (terms) =>
    terms.reduce((acc, item) => {
      const cat = item.data.category;
      (acc[cat] ??= []).push(item);
      return acc;
    }, {})
  );

  eleventyConfig.addFilter('limit', (arr, n) => arr.slice(0, n));

  return {
    dir: { input: 'src', output: 'public_html', includes: '_includes', data: '_data' },
    templateFormats: ['njk', 'md', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
  };
};
