// Replace G-XXXXXXXXXX with your real GA4 Measurement ID
// Get it free at: analytics.google.com → Admin → Data Streams → Web
const GA_ID = "G-XXXXXXXXXX";

export default function GoogleAnalytics() {
  if (!GA_ID || GA_ID === "G-XXXXXXXXXX") return null;
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { page_path: window.location.pathname });
          `,
        }}
      />
    </>
  );
}
