import { LanguageBootstrap } from "../../components/LanguageBootstrap";
import { SiteApp } from "../../components/SiteApp";
export default function Home() {
  return (
    <>
      <LanguageBootstrap locale="zh" />
      <SiteApp locale="zh" />
    </>
  );
}
