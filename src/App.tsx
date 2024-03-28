import Header from "./components/Header";
import { TransactionsProvider } from "./contexts/TransactionsContext";
import Transactions from "./pages/Transactions";

export default function App() {
  return (
    <TransactionsProvider>
      <Header />
      <Transactions />
    </TransactionsProvider>
  );
}
