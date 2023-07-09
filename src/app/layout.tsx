import "@/styles/globals.css";

import Header from "@/components/header";

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

        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=source-sans-pro:400,500,600,700,800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.bunny.net/css?family=source-serif-pro:400,500,600,700,800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.bunny.net/css?family=fira-code:400,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen subpixel-antialiased bg-neutral-100 text-neutral-800">
        <Header />
        <main className="font-sans text-sm lg:text-base 2xl:text-lg">
          {children}
        </main>
      </body>
    </html>
  );
}
