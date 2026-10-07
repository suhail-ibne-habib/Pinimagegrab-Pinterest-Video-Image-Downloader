# PinImageGrab

Free Pinterest video and image downloader. Paste a public pin link and save the original photo, GIF, or MP4. No account, and PinImageGrab does not add a watermark.

**Live site:** [https://www.pinimagegrab.com](https://www.pinimagegrab.com)

PinImageGrab is an independent project. It is not affiliated with Pinterest. Pinterest is a trademark of Pinterest, Inc. Only download media you have the right to keep.

## Name

The product name is **PinImageGrab**, the same words as [www.pinimagegrab.com](https://www.pinimagegrab.com). The logo, the page title, and the address bar match, so visitors are not asked to trust a brand that the URL does not show.

Page titles still lead with the search phrase, for example “Pinterest video downloader,” and end with PinImageGrab.

## What you can download

- Public pin photos at the resolution Pinterest published
- Public pin videos as MP4
- GIFs that Pinterest serves as video
- Carousel and Story Pin media, when the pin is public

Private pins, deleted pins, and links that are not a single pin will not resolve. PinImageGrab never asks for a Pinterest password.

## Pages

| Page | Purpose |
| --- | --- |
| `/` | The downloader |
| `/pinterest-video-downloader` | Video-pin guide |
| `/pinterest-image-downloader` | Photo, GIF, and carousel guide |
| `/how-to-download-pinterest-videos` | Step-by-step tutorial |
| `/privacy`, `/terms`, `/dmca` | Legal pages |

## Develop locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The app is Next.js (App Router) with the download API in `src/app/api/download`.

## Search visibility

PinImageGrab is a website. It can show up in Google, Bing, and other web search engines. It will not show up inside YouTube search. YouTube search only lists videos uploaded to YouTube.

### After you deploy

1. Confirm [https://www.pinimagegrab.com](https://www.pinimagegrab.com) is the domain people should find. Vercel redirects the non-www address there. The canonical URL, Open Graph tags, `robots.txt`, and `sitemap.xml` all point at the `www` host. The `vercel.app` hostname should not be the one you promote.
2. In [Google Search Console](https://search.google.com/search-console), use the property `https://www.pinimagegrab.com`, verify it, and submit `sitemap.xml`.
3. Use URL Inspection on the homepage and the three guide pages, then request indexing.
4. Give it time. A new site in a crowded query (“Pinterest downloader”) often takes days or weeks, and it will not outrank established tools on the head term immediately. The guide pages target more specific searches.

### What the site already tells search engines

- One clear title and description, with `metadataBase` so social images resolve
- A generated Open Graph image (1200×630)
- `robots.txt` that allows the site and blocks `/api/`
- A sitemap of the real public URLs
- WebSite, WebApplication, HowTo, FAQ, and breadcrumb structured data that matches the visible text
- No fake star rating. Invented review markup can get a site ignored
- Real privacy, terms, and DMCA pages instead of empty footer links

### If you also want YouTube

Upload a short demo to your own YouTube channel: copy a public pin link, paste it into PinImageGrab, save the file. Put `https://www.pinimagegrab.com` in the video description and as a pinned comment. That video can appear in YouTube search. The website itself still will not.

When that video URL exists, it can be added to the page as a real `VideoObject`. Do not add a video schema until the video is public.

## License of the content you download

PinImageGrab fetches files that a public pin already exposes. It does not grant you a license to those files. Respect the creator and the applicable copyright law.
