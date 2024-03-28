import { useCallback, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { createContext } from "use-context-selector";

interface Transaction {
  id: number
  description: string
  kind: "income" | "outcome"
  category: string
  price: number
  createdAt: string
}

type CreateTransactionData = Omit<Transaction, "id" | "createdAt">

interface TransactionsContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => void
  createTransaction: (data: CreateTransactionData) => void
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export function TransactionsProvider({ children }: { children: React.ReactNode }) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = useCallback(
    async (query?: string) => {
      const res = await api.get("transactions", {
        params: {
          _sort: "createdAt",
          _order: "desc",
          q: query
        }
      });

      setTransactions(res.data);
    }, []
  );

  const createTransaction = useCallback(async (data: CreateTransactionData) => {
    if (data.kind === "outcome") data.price = data.price * -1;

    await api.post("transactions", {
      ...data,
      createdAt: new Date()
    });
  }, []
  );

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{
      transactions,
      fetchTransactions,
      createTransaction
    }}>
      {children}
    </TransactionsContext.Provider>
  );
}
