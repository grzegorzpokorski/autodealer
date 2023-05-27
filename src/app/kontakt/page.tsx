import { ContactPage } from "@/components/pages/ContactPage/ContactPage";

export const metadata = {
  title: "Kontakt",
  alternates: {
    canonical: "Kontakt",
  },
  openGraph: {
    images: [
      {
        url: `/api/og?width=1200&height=630&subtitle=${encodeURIComponent(
          "Kontakt",
        )}`,
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
};

export default function Page() {
  return <ContactPage />;
}
