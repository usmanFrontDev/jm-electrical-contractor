import type { ReactNode } from "react";
import { firstPageContent, secondPageContent } from "../constant/Layout";
import Header from "./Header";
import SectionOne from "./SectionOne";
import Footer from "./Footer";
import SectionTwo, { type PageDataSectionTwo } from "./SectionTwo";

type LayoutProps = {
  variant:
    | "home"
    | "about"
    | "whyus"
    | "service_1"
    | "service_2"
    | "service_3"
    | "service_4"
    | "service_5"
    | "service_6"
    | "gallery"
    | "blog"
    | "faqs";
  children: ReactNode;
};

const Layout = ({ variant, children }: LayoutProps) => {
  const combineStyleVariant1 = ["home", "about", "whyus"];
  const combineStyleVariant2 = [
    "service_1",
    "service_2",
    "service_3",
    "service_4",
    "service_5",
    "service_6",
  ];
  const combineStyleVariant3 = ["gallery", "blog", "faqs"];

  // const isNormalPage = combineStyleVariant1.includes(variant);
  // const isServicePage = combineStyleVariant2.includes(variant);
  // const isCenterPage = combineStyleVariant3.includes(variant);

  const pageData = firstPageContent[variant];

  return (
    <div className="w-full h-full overflow-hidden">
      <Header/>
      {/* FIRST PAGE */}
      <SectionOne
        pageData={pageData}
        isNormalPage={combineStyleVariant1.includes(variant)}
        isServicePage={combineStyleVariant2.includes(variant)}
        isCenterPage={combineStyleVariant3.includes(variant)}
      />
    <SectionTwo pageData={secondPageContent[variant] as PageDataSectionTwo} variant={variant} />
      <>{children}</>
      {/* FOOTER */}
     <Footer variant={combineStyleVariant1.includes(variant) ? 'footer1' : 'footer2'}/>
    </div>
  );
};

export default Layout;
