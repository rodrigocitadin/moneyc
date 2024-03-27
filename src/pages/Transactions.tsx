import { useContext } from "react";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import Summary from "../components/Summary";
import { TransactionsContext } from "../contexts/TransactionsContext";
import { currencyFormatter, dateFormatter } from "../utils/formatter";

export default function Transactions() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <>
      <Header />
      <Summary />
      <main className="w-full max-w-[1100px] mt-16 mx-auto px-6">
        <SearchForm />
        <table className="w-full border-separate border-spacing-y-2 mt-6">
          <tbody>
            {
              transactions.map(v => {
                return (
                  <tr key={v.id} className="*:py-6 *:px-8 *:bg-gray-700">
                    <td className="rounded-l-md" width="50%">{v.description}</td>
                    <td className={v.kind === 'outcome' ? "text-red-300" : "text-green-300"}>
                      {v.kind === 'outcome' && '- '}
                      {currencyFormatter.format(v.price)}
                    </td>
                    <td>{v.category}</td>
                    <td className="rounded-r-md">{dateFormatter.format(new Date(v.createdAt))}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </main>
    </>
  )
}
