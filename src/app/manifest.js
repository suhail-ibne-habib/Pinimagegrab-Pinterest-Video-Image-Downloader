import { siteConfig } from "@/lib/site";

export default function manifest() {
  return {
    name: "PinImageGrab — Pinterest Video & Image Downloader",
    short_name: "PinImageGrab",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    lang: "en",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
