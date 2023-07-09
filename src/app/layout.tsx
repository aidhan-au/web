import "@/styles/globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: {
    default:
      "Aidhan Creative - full-service agency to design, develop, deploy and drive sales for your business",
    template: "%s - Aidhan",
  },
};

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body
        className=""
        un-bg="neutral-100 dark:neutral-800"
        un-text="neutral-800 dark:neutral-200"
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
