"use client";
import { useEffect } from "react";
import { sitePath } from "../lib/site";

export function LanguageBootstrap({ locale = "zh" }) {
  useEffect(() => {
    const stored = document.cookie.match(
      /(?:^|;\s*)NEXT_LOCALE=(zh|en)(?:;|$)/,
    )?.[1];
    const preferred =
      stored ||
      (/^zh(?:-|$)/i.test(navigator.languages?.[0] || navigator.language || "")
        ? "zh"
        : "en");
    if (preferred !== locale) {
      location.replace(
        sitePath(preferred === "en" ? "/en/" : "/") +
          location.search +
          location.hash,
      );
    }
  }, [locale]);
  return null;
}
