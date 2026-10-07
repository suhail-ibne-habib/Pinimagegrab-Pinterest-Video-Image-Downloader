import Link from "next/link";
import { PageShell } from "@/components/seo/PageShell";
import { pageSocial } from "@/lib/site";

const title = "Pinterest Image Downloader";
const description =
  "Save public Pinterest images, GIFs, and carousel photos at the original resolution. Paste a pin link into PinImageGrab. No login and no extra watermark.";

export const metadata = {
  title,
  description,
  ...pageSocial("/pinterest-image-downloader"),
};

export default function PinterestImageDownloaderPage() {
  return (
    <PageShell title={title} description={description} path="/pinterest-image-downloader">
      <p>
        Pinterest shows a compressed preview in the feed. The pin itself usually points at a much larger image. PinImageGrab looks up that original file from a public pin URL so you can save the photo, GIF, or carousel images instead of a blurry screenshot.
      </p>
      <h2>Save a Pinterest image</h2>
      <ol>
        <li>Copy the pin link. A full pinterest.com/pin URL or a public pin.it link is fine.</li>
        <li>Paste it on the <Link href="/">PinImageGrab homepage</Link> and press Download.</li>
        <li>Save each image that appears. Carousels list every image PinImageGrab can read from that pin.</li>
      </ol>
      <h2>Photos, GIFs, and carousels</h2>
      <ul>
        <li>Still pins download as the original image file Pinterest published.</li>
        <li>Multi-image pins return each available frame, not only the first slide.</li>
        <li>Animated GIFs that Pinterest serves as video are saved as MP4. Use the <Link href="/pinterest-video-downloader">video downloader</Link> guide if the pin is a clip rather than a photo.</li>
      </ul>
      <p>
        Resolution depends on what the creator uploaded. A pin published at a small size cannot be enlarged into a true 4K file. PinImageGrab requests the best URL on the pin and leaves the pixels as they are.
      </p>
      <h2>Limits</h2>
      <p>
        Only public pins work. If Pinterest asks for a login before the image is visible, PinImageGrab cannot see it either. Boards and profile pages are not single images. Download content you are allowed to keep. PinImageGrab is an independent site and is not part of Pinterest.
      </p>
    </PageShell>
  );
}
