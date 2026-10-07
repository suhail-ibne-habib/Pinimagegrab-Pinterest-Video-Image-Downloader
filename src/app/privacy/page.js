import { PageShell } from "@/components/seo/PageShell";
import { pageSocial } from "@/lib/site";

const title = "Privacy Policy";
const description =
  "PinImageGrab does not ask you to create an account. This page explains what happens when you paste a Pinterest link.";

export const metadata = {
  title,
  description,
  ...pageSocial("/privacy"),
};

export default function PrivacyPage() {
  return (
    <PageShell title={title} description={description} path="/privacy">
      <p>Last updated October 7, 2026.</p>
      <h2>What PinImageGrab is</h2>
      <p>
        PinImageGrab is a website that fetches publicly available media from a Pinterest pin URL you provide. It is not affiliated with Pinterest.
      </p>
      <h2>What you send</h2>
      <p>
        When you press Download, your browser sends that pin URL to PinImageGrab’s server so the server can request the public pin and return the image or video addresses. PinImageGrab does not ask for your name, email, or Pinterest password.
      </p>
      <h2>What is not stored as an account</h2>
      <p>
        There is no PinImageGrab account. Downloaded files are saved by your own browser onto your device. Server logs may briefly include the request URL and standard technical data such as IP address, as is normal for a web host, so the site can run and so abuse can be limited.
      </p>
      <h2>Cookies</h2>
      <p>
        PinImageGrab does not set an advertising cookie and does not run a third-party analytics script in the app itself. Your host, such as Vercel, may collect standard operational logs.
      </p>
      <h2>Contact</h2>
      <p>
        Privacy questions can be sent through the project repository at github.com/suhail-ibne-habib/Pinimagegrab.
      </p>
    </PageShell>
  );
}
