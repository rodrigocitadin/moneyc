import { MagnifyingGlass } from "phosphor-react";

export default function SearchForm() {
  return (
    <form className="flex gap-4">
      <input
        className="flex-1 rounded-md border-none bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500"
        placeholder="Search for a transaction"
        type="text"
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
