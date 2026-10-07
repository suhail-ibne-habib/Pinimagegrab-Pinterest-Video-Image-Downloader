import Link from "next/link";
import { PageShell } from "@/components/seo/PageShell";
import { pageSocial } from "@/lib/site";

const title = "How to Download Pinterest Videos";
const description =
  "Copy a public Pinterest pin link, paste it into PinImageGrab, and save the MP4. This guide covers short links, image pins, private pins, and phones.";

export const metadata = {
  title,
  description,
  ...pageSocial("/how-to-download-pinterest-videos"),
};

export default function HowToDownloadPage() {
  return (
    <PageShell title={title} description={description} path="/how-to-download-pinterest-videos">
      <p>
        Pinterest does not offer a simple “save video file” button on every pin. You can still keep a public video by copying its link and opening it in a downloader. On PinImageGrab that takes about a minute and does not require a Pinterest account.
      </p>
      <h2>Steps</h2>
      <ol>
        <li>On your phone or computer, open the video pin.</li>
        <li>Tap Share, then Copy link. On a computer you can also copy the address bar. Both pinterest.com/pin links and pin.it links are accepted.</li>
        <li>Open <Link href="/">PinImageGrab</Link>, paste the link, and press Download.</li>
        <li>Wait for the preview. Press Save Video to store the MP4, or save the cover image if you only need the still.</li>
      </ol>
      <h2>On a phone</h2>
      <p>
        PinImageGrab runs in the mobile browser. You do not install an app. After you press Save Video, your browser downloads the MP4 into the usual downloads folder or the Files app, depending on the device.
      </p>
      <h2>If nothing downloads</h2>
      <ul>
        <li>The pin is private, removed, or behind a login wall. PinImageGrab can only read public pins.</li>
        <li>The link is a board, a profile, or a search page. Open one pin and copy that URL.</li>
        <li>The pin is a photo, not a video. Save it with the <Link href="/pinterest-image-downloader">image downloader</Link> instead.</li>
        <li>The request timed out. Paste the same link once more. Shared hosts sometimes get blocked by Pinterest for a moment.</li>
      </ul>
      <h2>Quality and rights</h2>
      <p>
        The MP4 is the file Pinterest attached to the pin. PinImageGrab does not upscale it and does not add a watermark. Pinterest’s name and logo belong to Pinterest, Inc. PinImageGrab is a separate tool. Keep a copy only when you have permission, for example your own pin or a file the creator allowed you to save.
      </p>
      <p>
        More detail on video pins is on the <Link href="/pinterest-video-downloader">Pinterest video downloader</Link> page.
      </p>
    </PageShell>
  );
}
