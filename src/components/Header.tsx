import * as Dialog from "@radix-ui/react-dialog";
import NewTransactionModal from "./NewTransactionModal";

export default function Header() {
  return (
    <header className="bg-gray-900 pt-12 pb-32">
      <div className="w-full max-w-[1100px] mx-auto px-6 flex justify-between items-center">
        <h1 className="font-bold text-4xl">Moneyc</h1>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button
              className="h-12 border-none bg-purple-500 text-white font-bold px-4 rounded-md hover:bg-purple-700 transition-colors duration-200"
            >
              New transaction
            </button>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </div>
    </header>
  );
}
