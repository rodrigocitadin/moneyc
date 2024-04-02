import * as Dialog from "@radix-ui/react-dialog";
import NewTransactionModal from "./NewTransactionModal";

export default function Header() {
  return (
    <header className="bg-white pt-12 pb-32">
      <div className="w-full max-w-[1100px] mx-auto px-6 flex justify-between items-center">
        <h1 className="font-bold text-4xl text-black">Moneyc</h1>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button
              className="h-12 border-none bg-black text-white font-bold px-4 rounded-md hover:bg-gray-800 transition-colors duration-200"
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
