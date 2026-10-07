import { ImageResponse } from "next/og";

export const alt = "PinImageGrab — free Pinterest video and image downloader";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          color: "white",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#E60023",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            P
          </div>
          <div style={{ fontSize: 32, fontWeight: 700 }}>PinImageGrab</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05, maxWidth: 900 }}>
            Free Pinterest video and image downloader
          </div>
          <div style={{ fontSize: 28, color: "#d1d5db" }}>
            Paste a public pin link. Save the original photo or MP4.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
