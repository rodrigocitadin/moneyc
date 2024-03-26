import { useEffect, useState } from "react";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import Summary from "../components/Summary";

interface Transaction {
  id: number
  description: string
  kind: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

export default function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then(res => res.json())
      .then(data => setTransactions(data));
  }, [])

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
                    <td className="text-blue-300">USD {v.price}</td>
                    <td className="rounded-r-md">{v.createdAt}</td>
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
