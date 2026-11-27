import { LegacyRouteRedirect } from "../../../../components/LegacyRouteRedirect";
import { languageUrls } from "../../../../lib/seo";
export const metadata = {
  robots: { index: false, follow: true },
  alternates: { canonical: languageUrls.en },
};
export default function LegacyEnHarnessPage() {
  return <LegacyRouteRedirect to="/en/" />;
}
