import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { IoCardOutline } from "react-icons/io5";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
]

interface Props {
  params: {
    id: string;
  }
}

export default async function ({ params }: Props) {

  const { id } = await params;


  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">

        <Title title={`Orden ${id}`} />

        <div className="grid grid-cols-1 sm:grid-cols-2">

          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <div className={
              clsx(
                "flex items-center rounded-lg py-2 px-3.5 text-sm font-bold text-white mb-5", {
                'bg-red-500': true,
                'bg-green-700': false,
              }
              )
            }>
              <IoCardOutline size={20} />
              {/* <span className="mx-2">Pendiente</span> */}
              <span className="mx-2">Pagado</span>
            </div>

            {/* Items */}
            {productsInCart.map(product => (
              <div key={product.slug} className="flex mb-5">

                <Image
                  style={{
                    width: '100px',
                    height: '100px'
                  }}
                  src={`/products/${product.images[0]}`}
                  alt={product.title}
                  width={100}
                  height={100}
                  className="mr-5 rounded"
                />

                <div>
                  <p>{product.title}</p>
                  <p>${product.price} x 3</p>
                  <p className="font-bold">Subtotal: {product.price * 3}</p>
                </div>

              </div>
            ))}
          </div>

          {/* checkout */}
          <div className="bg-white rounded-xl shadow-xl p-7 ">

            <h2 className="text-xl mb-2 font-bold">Direcion de entrega</h2>
            <div className="mb-10">
              <p className="text-lg">Isaac Calderon</p>
              <p>Av. Always Green 456</p>
              <p>Center Street</p>
              <p>SpringField</p>
              <p>Misuri</p>
              <p>PC 102012</p>
              <p>123 456 7890</p>
            </div>

            {/* divider */}
            <div className="w-full h-0.5 rounded bg-gray-300 mb-10"></div>

            <h2 className="text-xl mb-2 font-bold">Resumen de orden</h2>
            <div className="grid grid-cols-2 ">
              <span>No. Products</span>
              <span className="text-right">3 articulos</span>

              <span>SubTotal</span>
              <span className="text-right">$100</span>

              <span>Impuesto (15%)</span>
              <span className="text-right">$100</span>

              <span className="mt-5 text-2xl">Total:</span>
              <span className="mt-5 text-2xl text-right">$100</span>
            </div>

            <div className="mt-5 mb-2 w-full">



              <div className={
                clsx(
                  "flex items-center rounded-lg py-2 px-3.5 text-sm font-bold text-white mb-5", {
                  'bg-red-500': false,
                  'bg-green-700': true,
                }
                )
              }>
                <IoCardOutline size={20} />
                {/* <span className="mx-2">Pendiente</span> */}
                <span className="mx-2">Pagado</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}