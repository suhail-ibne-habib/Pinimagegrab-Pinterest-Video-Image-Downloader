import { siteConfig } from "@/lib/site";

const lastModified = "2026-10-07";

const routes = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/pinterest-video-downloader", changeFrequency: "weekly", priority: 0.9 },
  { path: "/pinterest-image-downloader", changeFrequency: "weekly", priority: 0.9 },
  { path: "/how-to-download-pinterest-videos", changeFrequency: "weekly", priority: 0.8 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "/dmca", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
