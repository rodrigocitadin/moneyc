import { Close, Content, Overlay, Portal, Title } from "@radix-ui/react-dialog";
import { X } from "phosphor-react";

export default function NewTransactionModal() {
  return (
    <Portal>
      <Overlay className="fixed h-screen w-screen inset-0 bg-[#00000075]" />
      <Content className="min-w-[32rem] rounded-md p-12 bg-gray-800 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

        <div className="flex justify-between items-center">
          <Title className="text-3xl font-bold">New transaction</Title>
          <Close className="bg-transparent text-gray-500 block leading-none">
            <X size={24} />
          </Close>
        </div>


        <form className="flex mt-8 flex-col gap-4">
          <input
            className="rounded-md border-none bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500"
            type="text"
            placeholder="Description"
            required
          />
          <input
            className="rounded-md border-none bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500"
            type="number"
            placeholder="Amount"
            required
          />
          <input
            className="rounded-md border-none bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500"
            type="text"
            placeholder="Category"
            required
          />

          <button
            className="h-16 border-none bg-blue-500 hover:bg-blue-700 transition-colors duration-200 text-white font-bold rounded-md mt-6"
          >
            Submit
          </button>
        </form>
      </Content>
    </Portal>
  )
}
