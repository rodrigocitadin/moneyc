import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { currencyFormatter } from "../utils/formatter";
import useSummary from "../hooks/useSummary";

export default function Summary() {
  const summary = useSummary();

  return (
    <div className="md:grid w-full max-w-[1100px] mx-auto px-6 flex flex-col md:grid-cols-3 gap-8 mt-[-5rem]">
      <div className="bg-black rounded-md p-8">
        <header className="flex items-center justify-between">
          <span>Income</span>
          <ArrowCircleUp size={32} className="text-green-300" />
        </header>
        <strong className="text-green-300 block mt-4 text-3xl">{currencyFormatter.format(summary.income)}</strong>
      </div>
      <div className="bg-black rounded-md p-8">
        <header className="flex items-center justify-between">
          <span>Outcome</span>
          <ArrowCircleDown size={32} className="text-red-300" />
        </header>
        <strong className="text-red-300 block mt-4 text-3xl">{currencyFormatter.format(summary.outcome)}</strong>
      </div>
      <div className="bg-black rounded-md p-8">
        <header className="flex items-center justify-between">
          <span>Total</span>
          <CurrencyDollar size={32} />
        </header>
        <strong className="block mt-4 text-3xl">{currencyFormatter.format(summary.total)}</strong>
      </div>
    </div>
  );
}
