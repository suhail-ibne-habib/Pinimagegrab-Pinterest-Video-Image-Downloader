import Link from "next/link";
import { PageShell } from "@/components/seo/PageShell";
import { pageSocial } from "@/lib/site";

const title = "Pinterest Video Downloader";
const description =
  "Download a public Pinterest video as an MP4. Paste the pin link into PinImageGrab and save the file in the quality Pinterest published. No account required.";

export const metadata = {
  title,
  description,
  ...pageSocial("/pinterest-video-downloader"),
};

export default function PinterestVideoDownloaderPage() {
  return (
    <PageShell title={title} description={description} path="/pinterest-video-downloader">
      <p>
        A Pinterest video downloader takes a public pin link and gives you the video file itself, usually an MP4. PinImageGrab does that in the browser. You paste the URL, PinImageGrab reads the pin, and you save the video that Pinterest already hosts for that pin.
      </p>
      <h2>Download a Pinterest video</h2>
      <ol>
        <li>Open the pin on Pinterest and copy the link. The address-bar URL and a pin.it short link both work when the pin is public.</li>
        <li>Paste it into the box on the <Link href="/">PinImageGrab homepage</Link> and press Download.</li>
        <li>When a video is available, choose Save Video. The file is the MP4 from that pin, not a re-encoded copy and not a screenshot.</li>
      </ol>
      <h2>What you can save</h2>
      <ul>
        <li>Standard video pins, saved as MP4.</li>
        <li>Idea Pins and Story Pins when they expose a video file.</li>
        <li>A cover image along with the video, when the pin includes one.</li>
      </ul>
      <p>
        Quality follows the source. If Pinterest published an HD file, that is what you get. PinImageGrab does not invent a higher resolution, and it does not stamp its own watermark onto the video.
      </p>
      <h2>When a video will not download</h2>
      <p>
        Private pins, deleted pins, and pins that Pinterest only shows after login cannot be fetched. A link that points at a profile or a board, rather than a single pin, is not a video URL. If the pin is a still photo, use the <Link href="/pinterest-image-downloader">Pinterest image downloader</Link> page instead.
      </p>
      <p>
        PinImageGrab is not affiliated with Pinterest. Save videos only when you have the right to keep them. For the full walkthrough, read <Link href="/how-to-download-pinterest-videos">how to download Pinterest videos</Link>.
      </p>
    </PageShell>
  );
}
