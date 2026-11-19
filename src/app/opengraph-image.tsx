import { ImageResponse } from "next/og";

/**
 * Auto-generated 1200×630 preview image for Facebook / Messenger / Telegram.
 * Text is Latin-only because the OG renderer can't shape Khmer script.
 * To use a real photo instead: delete this file and add
 * src/app/opengraph-image.jpg (1200×630).
 */
export const alt = "Chamnob Boeng Thom — lakeside Khmer restaurant in Kampong Cham";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 64,
          background:
            "linear-gradient(180deg, #24382C 0%, #6B5A3E 35%, #C97C3A 60%, #F2B66B 72%, #5E5038 74%, #1F2E25 100%)",
          color: "#FAF7F0",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 900,
            top: 260,
            width: 160,
            height: 160,
            borderRadius: 999,
            background: "#FFE2A8",
            boxShadow: "0 0 120px 60px rgba(255,226,168,0.55)",
          }}
        />
        <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -1 }}>Chamnob Boeng Thom</div>
        <div style={{ fontSize: 34, marginTop: 8, color: "#F0E9D8" }}>
          Lakeside Khmer restaurant · Kampong Cham · Open 24/7
        </div>
        <div style={{ fontSize: 30, marginTop: 20, color: "#D98A3D", fontWeight: 700 }}>
          012 372 489
        </div>
      </div>
    ),
    size,
  );
}
