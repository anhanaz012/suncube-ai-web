import { Metadata } from "next";
import HeaderTwo from "@/layout/header/header-two";
import MainWrapper from "@/components/wrapper/main-wrapper";
import ContactWrapper from "./_components/contact-wrapper";
import ContactArea from "./_components/contact-area";
import FooterInner from "@/layout/footer/footer-inner";
import PageTitle from "@/components/common/page-title";
import Footer from "@/layout/footer/footer-one";


export const metadata: Metadata = {
  title: "Contact Page - Suncube-AI Next js Template",
  description:
    "Suncube-AI is a agency and portfolio template built with Next.js, designed to showcase your work and services effectively.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header area start */}
      <HeaderTwo />
      {/* Header area end */}

      {/* Main wrapper start */}
      <MainWrapper
        bodyCls={[
          "body-wrapper",
          "dark",
          "body-page-inner",
          "font-heading-sequelsans-romanbody",
        ]}
      >
        <ContactWrapper>

          <main>

            {/* page title area start */}
            <PageTitle title="Contact" />
            {/* page title area end */}

            {/* contact area start */}
            <ContactArea/>
            {/* contact area end */}

          </main>

          {/* Footer area start */}
          <Footer/>
          {/* Footer area end */}
        </ContactWrapper>
      </MainWrapper>
      {/* Main wrapper end */}
    </>
  );
}
