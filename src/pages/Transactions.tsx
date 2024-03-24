import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import Summary from "../components/Summary";

export default function Transactions() {
  return (
    <>
      <Header />
      <Summary />
      <main className="w-full max-w-[1100px] mt-16 mx-auto px-6">
        <SearchForm />
        <table className="w-full border-separate border-spacing-y-2 mt-6">
          <tbody>
            <tr className="*:py-6 *:px-8 *:bg-gray-700">
              <td className="rounded-l-md" width="50%">Website development</td>
              <td className="text-blue-300">USD 12,000.00</td>
              <td className="rounded-r-md">02/13/2024</td>
            </tr>
            <tr className="*:py-6 *:px-8 *:bg-gray-700">
              <td className="rounded-l-md" width="50%">Burguer</td>
              <td className="text-red-300">USD - 55.50</td>
              <td className="rounded-r-md">02/12/2024</td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  )
}
