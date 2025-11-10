
import { initialData } from "@/seed/seed";
import { ProducMobileSlideShow, SizeSelector } from "@/components";
import { ProducSlideShow } from "@/components/products/slideshow/ProducSlideShow";
import { QuantitySelector } from "@/components/products/QuantitySelector";
import { titleFont } from "@/config/fonts";
import { notFound } from "next/navigation";
import { title } from "node:process";

interface Props {
  params: {
    slug: string;
  }
}

export default async function ({ params }: Props) {

  const { slug } = await params;
  const product = initialData.products.find(product => product.slug === slug)

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid md:grid-cols-3 gap-3">
      {/* SlideShow */}
      <div className="col-span-1 md:col-span-2 ">
        {/* Mobile Slideshow */}
        <ProducMobileSlideShow
          images={product.images}
          title={product.title}
          className="block md:hidden"
        />
        {/* Destok Slideshow */}
        <ProducSlideShow
          images={product.images}
          title={product.title}
          className="hidden md:block"
        />
      </div>

      {/* Detalles */}
      <div className="col-span-1 px-5 ">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">
          $ {product.price.toFixed(2)}
        </p>
        {/* Selector de tallas  */}
        <SizeSelector
          selectedSize={product.sizes[0]}
          availableSize={product.sizes}
        />
        {/* Selector de cantidad  */}
        <QuantitySelector quantity={1} />
        {/* Boton  */}
        <button className="my-5 btn-primary">
          Agregar al carrito
        </button>
        {/* descripcion */}
        <h3 className="font-bold text-sm">Descripcion</h3>
        <p className="font-light">
          {product.description}
        </p>
      </div>

    </div>
  );
}