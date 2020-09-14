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
    tex2jax: {
      inlineMath: [["$", "$"], ["\\(", "\\)"]],
      displayMath: [["$$", "$$"], ["\\[", "\\]"]],
      processEscapes: true,
    }
  // AutoNumbering of displayed formulas
      // equationNumbers: { autoNumber: "AMS" },
      // All mathjax extensions:
      // http://docs.mathjax.org/en/latest/tex.html#tex-and-latex-extensions
      // Source code for all extensions:
      // https://github.com/mathjax/MathJax/tree/master/extensions/TeX
  }
});

// MathJax.Hub.Queue(
//   // ["resetEquationNumbers", MathJax.InputJax.TeX],
//   ["PreProcess", MathJax.Hub],
//   ["Reprocess", MathJax.Hub]
//  );

// // http://docs.mathjax.org/en/latest/configuration.html#configuring-mathjax-after-it-is-loaded
MathJax.Hub.Configured()



// (function () {
//   var script = document.createElement('script');
//   script.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/latest.js?config=TeX-MML-AM_CHTML";
//   script.async = true;
//   document.head.appendChild(script);
// })();
