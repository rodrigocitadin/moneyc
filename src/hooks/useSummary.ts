import { useMemo } from "react";
import { TransactionsContext } from "../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

export default function useSummary() {
  const transactions = useContextSelector(
    TransactionsContext,
    context => context.transactions
  );

  const summary = useMemo(() => {
    return transactions.reduce((acc, transaction) => {
      if (transaction.kind === "income") {
        acc.income += transaction.price;
        acc.total += transaction.price;
      }

      if (transaction.kind === "outcome") {
        acc.outcome += transaction.price;
        acc.total += transaction.price;
      }

      return acc;
    }, {
      income: 0, outcome: 0, total: 0
    });

  }, [transactions]);

  return summary;
}
