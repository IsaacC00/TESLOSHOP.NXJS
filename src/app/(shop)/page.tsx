import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";

const products = initialData.products

//? (shop) para que en la ruta aparesca /
export default function NamePage() {

  return (
    <>
      <Title
        title="Tienda"
        subtitle="Todos Los productos"
        className="mb-5" />

      <ProductGrid
        product={products}
      />
    </>
  );
}