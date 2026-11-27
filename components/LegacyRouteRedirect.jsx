"use client";
import { useEffect } from "react";
import { sitePath } from "../lib/site";

// 兼容旧 /harness/ 与 /en/harness/ 书签与索引链接，自动平滑回跳至根路径。
export function LegacyRouteRedirect({ to = "/" }) {
  const target = sitePath(to);
  useEffect(() => {
    location.replace(target + location.search + location.hash);
  }, [target]);
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#000",
        color: "#e5e7eb",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <noscript>
        <meta httpEquiv="refresh" content={`0;url=${target}`} />
      </noscript>
      <p>
        Redirecting to{" "}
        <a href={target} style={{ color: "#fff", textDecoration: "underline" }}>
          {target}
        </a>
        ...
      </p>
    </main>
  );
}
