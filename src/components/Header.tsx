export default function Header() {
  return (
    <header className="bg-gray-900 pt-4 pb-8">
      <div
        className="w-full max-w-[1100px] mx-auto px-2 flex justify-between items-center" 
      >
        <h1>moneyc</h1>
        <button>
          new transaction
        </button>
      </div>
    </header>
  )
}
