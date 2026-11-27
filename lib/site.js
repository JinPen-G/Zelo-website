// Public marketing-site configuration, not business authorization or AI tools.
export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");
export const sitePath = (pathname) => basePath + pathname;
// Shared by both language roots; the browser selects the matching tab theme.
export const siteIcons = {
  icon: [
    {
      url: sitePath("/harness/icons/rentalos-icon-black.svg"),
      type: "image/svg+xml",
      sizes: "any",
      media: "(prefers-color-scheme: light)",
    },
    {
      url: sitePath("/harness/icons/rentalos-icon-white.svg"),
      type: "image/svg+xml",
      sizes: "any",
      media: "(prefers-color-scheme: dark)",
    },
  ],
};
export const siteLinks = {
  repository: "https://github.com/JinPen-G/Zelo",
  rentalCore: "https://github.com/JinPen-G/Zelo-rental-core",
  issues: "https://github.com/JinPen-G/Zelo/issues/new",
  discussions: "https://github.com/JinPen-G/Zelo/discussions",
  docs: {
    zh: "https://github.com/JinPen-G/Zelo/blob/main/packages/core-contracts/README.md#core-quick-start",
    en: "https://github.com/JinPen-G/Zelo/blob/main/README.en.md#quick-start",
  },
  plugins: "https://github.com/topics/zelo-core",
  paper: "https://github.com/JinPen-G/Zelo/discussions",
};
export function githubIssueUrl(title, body) {
  const params = new URLSearchParams();
  if (title) params.set("title", title);
  if (body) params.set("body", body);
  const query = params.toString();
  return query ? `${siteLinks.issues}?${query}` : siteLinks.issues;
}
export const downloadOptions = [
  {
    platform: "macOS",
    href: "#",
    labelKey: "harnessHeroDownloadMac",
    noteKey: "harnessHeroDownloadMacNote",
  },
  {
    platform: "Windows",
    href: "#",
    labelKey: "harnessHeroDownloadWindows",
    noteKey: "harnessHeroDownloadWindowsNote",
  },
];
export const assetPath = (value) => sitePath("/harness" + value);
export function trackInteraction(id) {
  if (typeof document !== "undefined")
    document.dispatchEvent(
      new CustomEvent("rentalos:interaction", { detail: { id } }),
    );
}
export function useRegionSnapshot() {
  return { isLoading: false, countryCode: null, isMainland: false };
}
export function requestDemo(trigger, topic) {
  document.dispatchEvent(
    new CustomEvent("rentalos:request-demo", { detail: { trigger, topic } }),
  );
}
