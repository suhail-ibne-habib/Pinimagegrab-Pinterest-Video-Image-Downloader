import Link from "next/link";
import { PageShell } from "@/components/seo/PageShell";
import { pageSocial } from "@/lib/site";

const title = "Terms of Service";
const description =
  "Terms for using PinImageGrab, a free tool for saving publicly available Pinterest media you have the right to keep.";

export const metadata = {
  title,
  description,
  ...pageSocial("/terms"),
};

export default function TermsPage() {
  return (
    <PageShell title={title} description={description} path="/terms">
      <p>Last updated October 7, 2026.</p>
      <h2>The service</h2>
      <p>
        PinImageGrab lets you paste a public Pinterest URL and download media that pin already exposes. The tool is provided as-is, free of charge, with no guarantee that every pin will resolve.
      </p>
      <h2>Your responsibility</h2>
      <p>
        You may only download content you have the right to save. That includes your own pins and media the rights holder has allowed you to copy. You are responsible for following Pinterest’s rules and the copyright law that applies to you.
      </p>
      <h2>No affiliation</h2>
      <p>
        PinImageGrab is not sponsored by, endorsed by, or part of Pinterest. Pinterest is a trademark of Pinterest, Inc.
      </p>
      <h2>Acceptable use</h2>
      <p>
        Do not abuse the service, probe it for unauthorized access, or use it to overwhelm another website. PinImageGrab may refuse requests that fail or that the upstream site blocks.
      </p>
      <h2>Copyright complaints</h2>
      <p>
        Rights holders can use the <Link href="/dmca">DMCA</Link> page.
      </p>
    </PageShell>
  );
}
