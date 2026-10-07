import Link from "next/link";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

export function PageShell({ title, description, path, children }) {
  const pageUrl = `${siteConfig.url}${path}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: title,
        description,
        isPartOf: {
          "@type": "WebSite",
          name: siteConfig.name,
          url: siteConfig.url,
        },
        about: {
          "@type": "WebApplication",
          name: siteConfig.name,
          url: siteConfig.url,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: title,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <JsonLd data={jsonLd} />
      <Navbar />
      <article className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-medium text-red-400 mb-4">
            <Link href="/" className="hover:text-red-300">
              {siteConfig.name}
            </Link>
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {title}
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed mb-10">{description}</p>
          <div className="space-y-6 text-gray-300 leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-3 [&_a]:text-red-400 [&_a]:underline [&_a]:underline-offset-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2">
            {children}
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
