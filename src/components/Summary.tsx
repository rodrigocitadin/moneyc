import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionsContext";

export default function Summary() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.kind === 'income') {
      acc.income += transaction.price
      acc.total += transaction.price
    }

    if (transaction.kind === 'outcome') {
      acc.outcome += transaction.price
      acc.total -= transaction.price
    }

    return acc;
  }, {
    income: 0, outcome: 0, total: 0
  });

  return (
    <div className="w-full max-w-[1100px] mx-auto px-6 grid grid-cols-3 gap-8 mt-[-5rem]">
      <div className="bg-gray-600 rounded-md p-8">
        <header className="flex items-center justify-between text-gray-300">
          <span>Income</span>
          <ArrowCircleUp size={32} className="text-blue-500" />
        </header>
        <strong className="block mt-4 text-3xl">USD {summary.income}</strong>
      </div>
      <div className="bg-gray-600 rounded-md p-8">
        <header className="flex items-center justify-between text-gray-300">
          <span>Outcome</span>
          <ArrowCircleDown size={32} className="text-red-500" />
        </header>
        <strong className="block mt-4 text-3xl">USD {summary.outcome}</strong>
      </div>
      <div className="bg-blue-700 rounded-md p-8">
        <header className="flex items-center justify-between text-gray-300">
          <span>Total</span>
          <CurrencyDollar size={32} className="text-white" />
        </header>
        <strong className="block mt-4 text-3xl">USD {summary.total}</strong>
      </div>
    </div>
  )
}
