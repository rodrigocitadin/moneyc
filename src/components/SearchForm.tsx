import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as z from 'zod';

const searchFormSchema = z.object({
  query: z.string()
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

export default function SearchForm() {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema)
  })

  function handleFormSubmit(data: SearchFormInput) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}  className="flex gap-4">
      <input
        className="flex-1 rounded-md border-none bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500"
        placeholder="Search for a transaction"
        type="text"
        {...register('query')}
      />
      <button
        className="transition-all duration-200 flex items-center gap-4 p-4 bg-transparent border-2 border-purple-300 text-purple-300 font-bold rounded-md hover:bg-purple-500 hover:border-purple-500 hover:text-white"
      >
        <MagnifyingGlass size={20} />
        Search
      </button>
    </form>
  )
}
