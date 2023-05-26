import { Search, ShoppingBag } from 'lucide-react'

export default function Header() {
  return (
    <div className="flex flex-1 justify-between mx-20 my-3">
      <div>
        <h1 className="font-alt text-4xl text-gray-700">capputeeno</h1>
      </div>
      <div className="flex items-center relative">
        <label htmlFor="">
          <input
            type="text"
            name="search"
            autoComplete="off"
            placeholder="Procurando por algo específico?"
            className="font-saira bg-gray-100 rounded-md p-2 text-sm w-[352px] h-[42px]"
          />
        </label>
        <Search className="w-5 h-5 absolute text-gray-400 right-12" />
        <ShoppingBag className="w-5 h-5 text-gray-400 ml-4" />
      </div>
    </div>
  )
}
