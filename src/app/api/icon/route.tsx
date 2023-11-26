import { env } from "@/lib/env.mjs";
import type { NextRequest } from "next/server";
import { ImageResponse } from "next/og";

export const runtime = "edge";

const font = fetch(
  new URL("../../../assets/Poppins-Bold.ttf", import.meta.url),
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest): Promise<Response | ImageResponse> {
  try {
    const fontData = await font;

    const { searchParams } = new URL(req.url);

    const size = searchParams.has("size")
      ? parseInt(searchParams.get("size") || "0")
      : 32;

    const part1 = searchParams.has("part1")
      ? searchParams.get("part1")
      : env.NEXT_PUBLIC_SITE_NAME_FIRST_PART.slice(0, 1);

    const part2 = searchParams.has("part2")
      ? searchParams.get("part2")
      : env.NEXT_PUBLIC_SITE_NAME_SECOND_PART.slice(0, 1);

    const fontSize = size / 2;

    return new ImageResponse(
      (
        <div tw="bg-white text-primary font-bold w-full h-full flex flex-col items-center justify-center">
          <p
            tw="m-auto p-auto leading-none"
            style={{ fontSize: fontSize, lineHeight: 2, color: "#31a4fb" }}
          >
            {part1}
            <span tw="text-secondary" style={{ color: "#0f143c" }}>
              {part2}
            </span>
          </p>
        </div>
      ),
      {
        width: size,
        height: size,
        fonts: [
          {
            name: "Poppins",
            data: fontData,
            style: "normal",
            weight: 700,
          },
        ],
      },
    );
  } catch (e) {
    if (!(e instanceof Error)) throw e;

    console.log(e.message);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
