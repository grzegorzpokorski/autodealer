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

    const width = searchParams.has("width")
      ? parseInt(searchParams.get("width") || "0")
      : 1200;

    const height = searchParams.has("height")
      ? parseInt(searchParams.get("height") || "0")
      : 630;

    const part1 = searchParams.has("part1")
      ? searchParams.get("part1")
      : "Auto";

    const part2 = searchParams.has("part2")
      ? searchParams.get("part2")
      : "Dealer";

    const subtitle = searchParams.get("subtitle");

    return new ImageResponse(
      (
        <div tw="flex h-full w-full flex-col items-center justify-center bg-white">
          <div tw="flex flex-col gap-4">
            <h1
              tw="my-0 mx-auto p-auto leading-none"
              style={{ fontSize: height / 5, lineHeight: 2, color: "#31a4fb" }}
            >
              {part1}
              <span style={{ color: "#0f143c" }}>{part2}</span>
            </h1>
            {subtitle && (
              <p
                tw="-mt-6 mx-auto leading-none uppercase text-center w-2/3"
                style={{
                  fontSize: height / 12,
                  color: "#0f143c",
                }}
              >
                {subtitle}
              </p>
            )}
          </div>
        </div>
      ),
      {
        width: width,
        height: height,
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
