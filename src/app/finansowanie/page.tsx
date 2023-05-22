import { FinancingPage } from "@/components/pages/FinancingPage/FinancingPage";

export const metadata = {
  title: "Finansowanie",
  description:
    "Firma AutoDealer oferuje kompleksową obsługę finansowania zakupionych pojazdów w firmie jak i z własnego źródła zarówno w kredycie jak i leasingu",
  alternates: {
    canonical: "finansowanie",
  },
};

export default function Page() {
  return <FinancingPage />;
}
