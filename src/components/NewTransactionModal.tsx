import { zodResolver } from "@hookform/resolvers/zod";
import { Close, Content, Overlay, Portal, Title } from "@radix-ui/react-dialog";
import { Item, Root } from "@radix-ui/react-radio-group";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as z from 'zod';

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  kind: z.enum(['income', 'outcome'])
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export default function NewTransactionModal() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema)
  })

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
            {...register('description')}
          />
          <input
            className="rounded-md border-none bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500"
            type="number"
            placeholder="Amount"
            required
            {...register('price')}
          />
          <input
            className="rounded-md border-none bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500"
            type="text"
            placeholder="Category"
            required
            {...register('category')}
          />

          <Root className="grid grid-cols-2 gap-4 mt-2">
            <Item value="income" className="data-[state=unchecked]:hover:bg-gray-600 *:data-[state=checked]:text-white data-[state=checked]:text-white data-[state=checked]:bg-green-500 bg-gray-700 p-4 flex items-center justify-center gap-2 rounded-md text-gray-300">
              <ArrowCircleUp size={24} className="text-green-500" />
              Income
            </Item>
            <Item value="outcome" className="data-[state=unchecked]:hover:bg-gray-600 *:data-[state=checked]:text-white data-[state=checked]:text-white data-[state=checked]:bg-red-500 bg-gray-700 p-4 flex items-center justify-center gap-2 rounded-md text-gray-300">
              <ArrowCircleDown size={24} className="text-red-500" />
              Outcome
            </Item>
          </Root>

          <button
            className="h-16 border-none bg-purple-500 hover:bg-purple-700 transition-colors duration-200 text-white font-bold rounded-md mt-6"
          >
            Submit
          </button>
        </form>
      </Content>
    </Portal>
  )
}
