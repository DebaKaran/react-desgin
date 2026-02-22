import { products } from "../../data/Products";
import ListLayout from "./ListLayout";
import ProductCard from "./ProductCard";

const ProductPage = () => {

  return (
    <ListLayout items={products} $variant="grid" $columns={3}
        renderItem={(product) => (
            <ProductCard product={product} />
        )}
    />
  );
}

export default ProductPage