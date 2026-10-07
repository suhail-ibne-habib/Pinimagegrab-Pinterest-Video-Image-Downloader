export const siteConfig = {
  name: "PinImageGrab",
  url: "https://www.pinimagegrab.com",
  title: "Pinterest Video Downloader — Free HD Images & MP4 | PinImageGrab",
  description:
    "PinImageGrab is a free Pinterest video and image downloader. Paste a pin link and save the original photo, GIF, or MP4. No account, no watermark added by PinImageGrab.",
  keywords: [
    "Pinterest video downloader",
    "Pinterest image downloader",
    "download Pinterest video",
    "save Pinterest image",
    "Pinterest GIF downloader",
    "Pinterest to MP4",
    "PinImageGrab",
  ],
};

export function pageSocial(path) {
  return {
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: siteConfig.name,
      url: path,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "PinImageGrab — free Pinterest video and image downloader",
        },
      ],
    },
  };
}

export const faqs = [
  {
    question: "How do I download a Pinterest video with PinImageGrab?",
    answer:
      "Copy the pin URL from the address bar or the share menu, paste it into the box on the PinImageGrab homepage, and press Download. When the pin includes a video, PinImageGrab returns an MP4 in the best quality that pin exposes.",
  },
  {
    question: "Is PinImageGrab free?",
    answer:
      "Yes. PinImageGrab is free to use in the browser. There is no account, subscription, or download cap built into the site.",
  },
  {
    question: "Do I need a Pinterest login?",
    answer:
      "No. PinImageGrab does not ask you to sign in. It can only read pins that are already public. Private pins and pins that Pinterest hides behind a login will not download.",
  },
  {
    question: "Can I download carousels, Story Pins, and GIFs?",
    answer:
      "Yes, when the pin is public. Carousels return each available image. GIFs and videos are saved as MP4 when Pinterest serves a video file.",
  },
  {
    question: "What quality will I get?",
    answer:
      "PinImageGrab requests the original media URL from the pin, not a tiny preview. Photos come through at the resolution Pinterest published, which can be HD or higher. Videos come through as the best MP4 that pin provides.",
  },
  {
    question: "Is PinImageGrab affiliated with Pinterest?",
    answer:
      "No. PinImageGrab is an independent tool. Pinterest is a trademark of Pinterest, Inc. Only download pins you have the right to save.",
  },
];

export const howToSteps = [
  {
    name: "Copy the Pinterest URL",
    text: "Open the pin and copy its link from the address bar or the share menu. Public pin.it short links work too.",
  },
  {
    name: "Paste the link into PinImageGrab",
    text: "Paste the URL into the box at the top of the PinImageGrab homepage. PinImageGrab detects whether the pin is a photo, GIF, video, or carousel.",
  },
  {
    name: "Download the file",
    text: "Press Download, then save the image or MP4 to your device. PinImageGrab does not add its own watermark.",
  },
];
