// MathJax extensioons

MathJax.Hub.Config({
  TeX: {
    extensions: [
      "color.js", // Color support in LaTeX
      "autobold.js", // support for \boldsymbol{...}
      "AMSmath.js",
      "AMSsymbols.js",
      "AMScd.js", // http://www.jmilne.org/not/Mamscd.pdf
      "bbox.js", // support for \bbox[options]{math}
      "begingroup.js", // mainly for formulas localization
      "cancel.js", // support for strikethrough formulas
      "HTML.js", // works by default
      "mhchem.js", // chemical formulas
      "unicode.js" // works by default
  ],
  // AutoNumbering of displayed formulas
      // equationNumbers: { autoNumber: "AMS" },
      // All mathjax extensions:
      // http://docs.mathjax.org/en/latest/tex.html#tex-and-latex-extensions
      // Source code for all extensions:
      // https://github.com/mathjax/MathJax/tree/master/extensions/TeX
  }
});

// http://docs.mathjax.org/en/latest/configuration.html#configuring-mathjax-after-it-is-loaded
MathJax.Hub.Configured()