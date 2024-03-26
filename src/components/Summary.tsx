import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";

export default function Summary() {
  return (
    <div className="w-full max-w-[1100px] mx-auto px-6 grid grid-cols-3 gap-8 mt-[-5rem]">
      <div className="bg-gray-600 rounded-md p-8">
        <header className="flex items-center justify-between text-gray-300">
          <span>Income</span>
          <ArrowCircleUp size={32} className="text-blue-500"/>
        </header>
        <strong className="block mt-4 text-3xl">USD 17,450.50</strong>
      </div>
      <div className="bg-gray-600 rounded-md p-8">
        <header className="flex items-center justify-between text-gray-300">
          <span>Outcome</span>
          <ArrowCircleDown size={32} className="text-red-500"/>
        </header>
        <strong className="block mt-4 text-3xl">USD 13,200.70</strong>
      </div>
      <div className="bg-blue-700 rounded-md p-8">
        <header className="flex items-center justify-between text-gray-300">
          <span>Total</span>
          <CurrencyDollar size={32} className="text-white"/>
        </header>
        <strong className="block mt-4 text-3xl">USD 4,249.80</strong>
      </div>
    </div>
  )
}
