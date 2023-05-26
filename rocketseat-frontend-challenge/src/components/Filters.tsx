import { ChevronDown } from 'lucide-react'

export default function Filters() {
  return (
    <div className="flex justify-between font-saira text-gray-600 w-4/5 mx-auto">
      <div className="flex gap-10 uppercase">
        <p className="hover:cursor-pointer hover:text-gray-700 hover:font-semibold transition-all">
          Todos os produtos
        </p>
        <p className="hover:cursor-pointer hover:text-gray-700 hover:font-semibold transition-all">
          Camisetas
        </p>
        <p className="hover:cursor-pointer hover:text-gray-700 hover:font-semibold transition-all">
          Canecas
        </p>
      </div>
      <div className="flex gap-2 items-center hover:cursor-pointer hover:text-gray-700 hover:font-semibold transition-all">
        <p>Organizar por</p>
        <ChevronDown className="w-4 h-4" />
      </div>
    </div>
  )
}
