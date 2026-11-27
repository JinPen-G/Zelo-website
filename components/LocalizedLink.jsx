"use client";
import Link from "next/link";
import { useLocale } from "next-intl";

export function LocalizedLink({ href, ...props }) {
  const locale = useLocale();
  const target =
    locale === "en" ? (href === "/" ? "/en/" : "/en" + href) : href;
  return <Link href={target} {...props} />;
}
