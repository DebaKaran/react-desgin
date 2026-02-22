import { products } from "../../data/Products";
import { GridContainer } from "../styled/Products.styled";
import ProductCard from "./ProductCard";

const ProductPage = () => {
  return (
    <GridContainer>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </GridContainer>
  );
}

export default ProductPage