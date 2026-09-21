import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE } from "@/lib/constants";

export const alt = `${SITE.name}: ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  // Use the logo mark file as-is so the image always matches the brand asset.
  const logo = await readFile(join(process.cwd(), "public/logo-mark.svg"));
  const logoSrc = `data:image/svg+xml;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0C0B0A",
          color: "#F1EDE4",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="" width={210} height={183} />
        <div
          style={{
            marginTop: 56,
            fontSize: 60,
            letterSpacing: 12,
            textTransform: "uppercase",
          }}
        >
          {SITE.name}
        </div>
        <div
          style={{
            marginTop: 28,
            width: 80,
            height: 2,
            backgroundColor: "#9AA0AA",
          }}
        />
        <div style={{ marginTop: 28, fontSize: 34, color: "#A9A6A0" }}>
          {SITE.tagline}
        </div>
      </div>
    ),
    size
  );
}
