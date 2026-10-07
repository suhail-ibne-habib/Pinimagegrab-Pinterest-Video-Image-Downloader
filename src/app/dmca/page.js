import { PageShell } from "@/components/seo/PageShell";
import { pageSocial } from "@/lib/site";

const title = "DMCA";
const description =
  "How rights holders can send a copyright notice about a pin processed through PinImageGrab.";

export const metadata = {
  title,
  description,
  ...pageSocial("/dmca"),
};

export default function DmcaPage() {
  return (
    <PageShell title={title} description={description} path="/dmca">
      <p>
        PinImageGrab does not host a public gallery of Pinterest files. It fetches a pin when someone pastes a link. If you are a copyright owner and believe a specific use of this site infringes your work, send a notice through the project repository at github.com/suhail-ibne-habib/Pinimagegrab.
      </p>
      <h2>Include these details</h2>
      <ul>
        <li>Your name and a way to reach you.</li>
        <li>The work you own and the pin URL involved.</li>
        <li>A statement that you have a good-faith belief the use is not authorized.</li>
        <li>A statement that the notice is accurate and that you are the rights holder or their agent.</li>
      </ul>
      <p>
        PinImageGrab is not affiliated with Pinterest. To remove a pin from Pinterest itself, use Pinterest’s own copyright process.
      </p>
    </PageShell>
  );
}
