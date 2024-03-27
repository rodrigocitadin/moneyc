import { TransactionsProvider } from "./contexts/TransactionsContext";
import Transactions from "./pages/Transactions";

export default function App() {
  return (
    <TransactionsProvider>
      <Transactions />
    </TransactionsProvider>
  );
}
