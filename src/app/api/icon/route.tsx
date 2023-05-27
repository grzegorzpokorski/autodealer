import type { NextRequest } from "next/server";
import { ImageResponse } from "next/server";

export const runtime = "edge";

const font = fetch(new URL("../Poppins-Bold.ttf", import.meta.url)).then(
  (res) => res.arrayBuffer(),
);

export async function GET(req: NextRequest): Promise<Response | ImageResponse> {
  try {
    const fontData = await font;

    const { searchParams } = new URL(req.url);

    const size = searchParams.has("size")
      ? parseInt(searchParams.get("size") || "0")
      : 32;

    const part1 = searchParams.has("part1") ? searchParams.get("part1") : "A";

    const part2 = searchParams.has("part2") ? searchParams.get("part2") : "D";

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
