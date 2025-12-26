import type { ReactNode } from "react";
import { firstPageContent } from "../constant/Layout";
import Header from "./Header";
import SectionOne from "./SectionOne";
import Footer from "./Footer";

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
      <>{children}</>
      {/* FOOTER */}
     <Footer/>
    </div>
  );
};

export default Layout;
