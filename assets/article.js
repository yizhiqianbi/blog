(function () {
  function slugify(text, index) {
    const normalized = text
      .trim()
      .toLowerCase()
      .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
      .replace(/^-+|-+$/g, "");
    return normalized || `section-${index + 1}`;
  }

  function enhanceRichText() {
    document.querySelectorAll(".article-section p").forEach((paragraph) => {
      const text = paragraph.textContent.trim();
      if (text.startsWith("【不确定】")) {
        paragraph.classList.add("rich-callout", "rich-callout-uncertain");
      }
    });

    document.querySelectorAll(".article-section h2, .article-section h3").forEach((heading, index) => {
      if (!heading.id) {
        heading.id = slugify(heading.textContent, index);
      }
      if (heading.querySelector(".heading-anchor")) return;

      const anchor = document.createElement("a");
      anchor.className = "heading-anchor";
      anchor.href = `#${heading.id}`;
      anchor.setAttribute("aria-label", "复制章节链接");
      anchor.textContent = "#";
      heading.append(" ", anchor);
    });
  }

  function renderLatex() {
    if (typeof window.renderMathInElement !== "function") return;

    window.renderMathInElement(document.body, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "\\[", right: "\\]", display: true },
        { left: "\\(", right: "\\)", display: false },
      ],
      ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code", "option"],
      throwOnError: false,
      errorColor: "#d8b56d",
    });
  }

  function initArticle() {
    enhanceRichText();
    renderLatex();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initArticle);
  } else {
    initArticle();
  }
})();
