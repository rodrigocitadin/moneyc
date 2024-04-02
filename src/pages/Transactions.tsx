import SearchForm from "../components/SearchForm";
import Summary from "../components/Summary";
import { TransactionsContext } from "../contexts/TransactionsContext";
import { currencyFormatter, dateFormatter } from "../utils/formatter";
import { useContextSelector } from "use-context-selector";

export default function Transactions() {
  const transactions = useContextSelector(
    TransactionsContext,
    context => context.transactions
  );

  return (
    <>
      <Summary />
      <main className="w-full max-w-[1100px] mt-16 mx-auto px-6">
        <SearchForm />
        <div className="overflow-x-auto mb-8">
          <table className="w-full rounded-md bg-white mt-6">
            <tbody>
              {
                transactions.map(v => {
                  return (
                    <tr key={v.id} className="text-white *:py-4 *:px-8 *:bg-black border-t-[0.5px] border-t-black border-b-[0.5px] border-b-white">
                      <td className="" width="50%">{v.description}</td>
                      <td className={v.kind === "outcome" ? "text-red-300" : "text-green-300"}>
                        {currencyFormatter.format(v.price)}
                      </td>
                      <td>{v.category}</td>
                      <td>{dateFormatter.format(new Date(v.createdAt))}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
