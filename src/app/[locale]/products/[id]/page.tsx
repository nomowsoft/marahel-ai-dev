import ProductHero from "../product_hero";
import ProductFeature from "../product_feature";
import ProductFeature2 from "../product_feature2";
import ProductWork from "../product_work";
import ProductPerformance from "../product_performance";
import ProductSecurity from "../product_security";
import { getProducts } from "@/utils/data_products/data_ai";
import ProductWorld from "../product_world";
import ProductPackages from "../product_packages";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function SingleProductPage({ params }: PageProps) {
  const { id } = await params; // ✅ ضروري await
  const numericId = Number(id);

  const products = getProducts((k: string) => k);
  const foundProduct = products.find((p) => p.id === numericId);

  if (!foundProduct) {
    return (
      <section className="text-center text-red-500 py-20">
        <p>Product not found.</p>
      </section>
    );
  }

  return (
    <section>
      <ProductHero product={foundProduct} />
      <ProductFeature product={foundProduct} />
      <ProductFeature2 product={foundProduct} />
      <ProductWork product={foundProduct} />
      <ProductWorld product={foundProduct} />
      <ProductPerformance product={foundProduct} />
      <ProductPackages product={foundProduct} />
      <ProductSecurity product={foundProduct} />
    </section>
  );
}
