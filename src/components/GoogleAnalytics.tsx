import Script from "next/script";
import GaPageviews from "@/components/GaPageviews";
import GaClickTracker from "@/components/GaClickTracker";

const GA_ID = "G-5PBNCF2VQQ";

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}', { send_page_view: false });
      `}</Script>
      {/* page_view on every route change (send_page_view:false above) */}
      <GaPageviews gaId={GA_ID} />
      {/* phone / estimate / financing-apply conversion clicks, site-wide */}
      <GaClickTracker />
    </>
  );
}
