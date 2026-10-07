import Link from "next/link";

const guides = [
  {
    href: "/pinterest-video-downloader",
    title: "Pinterest video downloader",
    description: "Turn a public pin video into an MP4 you can keep on your phone or computer.",
  },
  {
    href: "/pinterest-image-downloader",
    title: "Pinterest image downloader",
    description: "Save the original photo, GIF, or carousel images from a public pin link.",
  },
  {
    href: "/how-to-download-pinterest-videos",
    title: "How to download Pinterest videos",
    description: "A short walkthrough, plus what to do when a pin will not download.",
  },
];

export function Guides() {
  return (
    <section id="guides" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Guides for saving <span className="text-red-500">Pinterest</span> media
          </h2>
          <p className="text-gray-400 text-lg">
            Practical pages for the searches people actually type: video, images, and the exact steps.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="block rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-red-500/40 hover:bg-white/10 transition-colors"
            >
              <h3 className="text-xl font-bold mb-3">{guide.title}</h3>
              <p className="text-gray-400 leading-relaxed">{guide.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
