import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionsContext";

export default function useSummary() {
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

  return summary;
}
