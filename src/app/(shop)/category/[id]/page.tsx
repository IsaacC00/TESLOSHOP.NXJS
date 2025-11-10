import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const seedProducts = initialData.products;

interface Props {
  params: {
    id: Category;
  }
}

export default async function ({ params }: Props) {

  const { id } = await params;
  const products = seedProducts.filter(word => word.gender === id)
  console.log(products);
  

  //? tipar un objet literal
  const labels: Record<Category,string>  = {
    'women':'para mujeres',
    'men':'para hombres',
    'kid':'para ninios',
    'unisex':'para todos',
  }

  if (products.length === 0) {
    notFound();
  }

  return (
    <>
      <Title
        className="capitalize"
        title={`Articulos de ${(labels)[id]}`}
      />
      <ProductGrid
        product={products}
      />
    </>

  );
}