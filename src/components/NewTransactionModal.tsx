import { zodResolver } from "@hookform/resolvers/zod";
import { Close, Content, Overlay, Portal, Title } from "@radix-ui/react-dialog";
import { Item, Root } from "@radix-ui/react-radio-group";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { Controller, useForm } from "react-hook-form";
import { useContextSelector } from "use-context-selector";
import * as z from "zod";
import { TransactionsContext } from "../contexts/TransactionsContext";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number().positive(),
  category: z.string(),
  kind: z.enum(["income", "outcome"])
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export default function NewTransactionModal() {
  const createTransaction = useContextSelector(
    TransactionsContext,
    context => context.createTransaction
  );
  const { register, handleSubmit, formState: { isSubmitting }, control } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: { kind: "income" }
  });

  async function handleNewFormSubmit(data: NewTransactionFormInputs) {
    createTransaction(data);

    window.location.reload();
  }

  return (
    <Portal>
      <Overlay className="fixed h-screen w-screen inset-0 bg-[#00000075]" />
      <Content className="md:min-w[32rem] max-w-[32rem] rounded-md p-12 bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

        <div className="flex justify-between items-start md:items-center">
          <Title className="text-3xl font-bold">New transaction</Title>
          <Close className="bg-transparent block leading-none">
            <X size={24} />
          </Close>
        </div>


        <form onSubmit={handleSubmit(handleNewFormSubmit)} className="flex mt-8 flex-col gap-4">
          <input
            className="border-b-2 border-b-gray-400 text-gray-800 p-4 placeholder:text-gray-500"
            type="text"
            placeholder="Description"
            required
            {...register("description")}
          />
          <input
            className="border-b-2 border-b-gray-400 text-gray-800 p-4 placeholder:text-gray-500"
            type="number"
            placeholder="Amount"
            required
            {...register("price", { valueAsNumber: true })}
          />
          <input
            className="border-b-2 border-b-gray-400 text-gray-800 p-4 placeholder:text-gray-500"
            type="text"
            placeholder="Category"
            required
            {...register("category")}
          />

          <Controller
            control={control}
            name="kind"
            render={({ field }) => {
              return (
                <Root onValueChange={field.onChange} value={field.value} className="grid grid-cols-2 gap-4 mt-2">
                  <Item value="income" className="data-[state=unchecked]:hover:border-green-500 data-[state=unchecked]:hover:text-green-500 data-[state=checked]:border-green-500 *:data-[state=checked]:text-white data-[state=checked]:text-white data-[state=checked]:bg-green-500 bg-white p-4 flex items-center justify-center gap-2 rounded-md border-2 border-black">
                    <ArrowCircleUp size={24} />
                    <span className="hidden sm:inline">Income</span>
                  </Item>
                  <Item value="outcome" className="data-[state=unchecked]:hover:border-red-500 data-[state=unchecked]:hover:text-red-500 data-[state=checked]:border-red-500 *:data-[state=checked]:text-white data-[state=checked]:text-white data-[state=checked]:bg-red-500 bg-white p-4 flex items-center justify-center gap-2 rounded-md border-2 border-black">
                    <ArrowCircleDown size={24} />
                    <span className="hidden md:inline">Outcome</span>
                  </Item>
                </Root>
              );
            }}
          />


          <button
            className="h-16 border-none bg-black [&:not(:disabled)]:hover:bg-gray-800 transition-colors duration-200 text-white font-bold rounded-md mt-6"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </form>
      </Content>
    </Portal>
  );
}
