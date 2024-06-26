import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { TransactionsContext } from "../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

const searchFormSchema = z.object({
  query: z.string()
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

export default function SearchFormComponent() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema)
  });

  const fetchTransactions = useContextSelector(
    TransactionsContext,
    context => context.fetchTransactions
  );

  function handleFormSubmit(data: SearchFormInput) {
    fetchTransactions(data.query);
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="flex gap-4">
      <input
        className="flex-1 rounded-md border-2 border-black text-gray-800 p-4 placeholder:text-gray-500"
        placeholder="Search for a transaction"
        type="text"
        {...register("query")}
      />
      <button
        className="disabled:opacity-70 transition-all duration-200 flex items-center gap-4 p-4 bg-black text-white font-bold rounded-md [&:not(:disabled)]:hover:bg-gray-800"
        disabled={isSubmitting}
      >
        <MagnifyingGlass size={20} />
        <span className="hidden md:inline">Search</span>
      </button>
    </form>
  );
}
