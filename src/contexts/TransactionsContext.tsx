import { createContext } from "react"

interface Transaction {
  id: number
  description: string
  kind: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface TransactionsContextType {
  transactions: Transaction[]
}

const TransactionsContext = createContext({} as TransactionsContextType);

export function TransactionsProvider({ children }: { children: React.ReactNode }) {
  return (
    <TransactionsContext.Provider value={{ transactions: [] }}>
      {children}
    </TransactionsContext.Provider>
  )
}
