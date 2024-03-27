import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { currencyFormatter } from "../utils/formatter";
import useSummary from "../hooks/useSummary";

export default function Summary() {
  const summary = useSummary();

  return (
    <div className="w-full max-w-[1100px] mx-auto px-6 grid grid-cols-3 gap-8 mt-[-5rem]">
      <div className="bg-gray-600 rounded-md p-8">
        <header className="flex items-center justify-between text-gray-300">
          <span>Income</span>
          <ArrowCircleUp size={32} className="text-green-500" />
        </header>
        <strong className="block mt-4 text-3xl">{currencyFormatter.format(summary.income)}</strong>
      </div>
      <div className="bg-gray-600 rounded-md p-8">
        <header className="flex items-center justify-between text-gray-300">
          <span>Outcome</span>
          <ArrowCircleDown size={32} className="text-red-500" />
        </header>
        <strong className="block mt-4 text-3xl">{currencyFormatter.format(summary.outcome)}</strong>
      </div>
      <div className="bg-purple-700 rounded-md p-8">
        <header className="flex items-center justify-between text-gray-300">
          <span>Total</span>
          <CurrencyDollar size={32} className="text-white" />
        </header>
        <strong className="block mt-4 text-3xl">{currencyFormatter.format(summary.total)}</strong>
      </div>
    </div>
  )
}
