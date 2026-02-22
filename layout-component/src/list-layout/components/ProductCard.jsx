import { Card } from "../styled/Products.styled"

const ProductCard = ({product}) => {
  return (
        <Card>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <button>Add to Cart</button>
        </Card>
  )
}

export default ProductCard