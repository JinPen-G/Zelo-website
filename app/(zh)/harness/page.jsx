import { LegacyRouteRedirect } from "../../../components/LegacyRouteRedirect";
import { languageUrls } from "../../../lib/seo";
export const metadata = {
  robots: { index: false, follow: true },
  alternates: { canonical: languageUrls["zh-CN"] },
};
export default function LegacyZhHarnessPage() {
  return <LegacyRouteRedirect to="/" />;
}
