import { ProductPage } from "@/components/ProductPage";
import { mockProducts } from "@/lib/products";

export default function ProductPageRoute() {
  return <ProductPage products={mockProducts} />;
}
