import { apiRequest } from '../../api/api'
import Image from 'next/image'

export default async function Home() {
  const {
    data: {
      data: { allProducts },
    },
  } = await apiRequest()

  return (
    <main className="min-h-screen p-24">
      <div className="grid grid-cols-4 gap-5">
        {allProducts.map((product) => {
          return (
            <div key={product.id}>
              <Image
                src={product.image_url}
                alt="Product Image"
                width={256}
                height={300}
                className="rounded-t-lg h-[300px] w-[256px] object-cover"
                priority={true}
              />
              <p className="text-sm font-saira text-gray-500 mt-1 ml-1 border-b-2 w-[210px]">
                {product.name}
              </p>
              <p className="text-sm font-saira text-gray-700 font-semibold ml-2 mt-2">
                {`R$ ${(product.price_in_cents / 100)
                  .toFixed(2)
                  .replace('.', ',')}`}
              </p>
            </div>
          )
        })}
      </div>
    </main>
  )
}
