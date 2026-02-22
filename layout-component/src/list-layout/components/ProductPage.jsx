import React from 'react'
import { Card, GridContainer } from '../styled/Products.styled'
import { products } from '../../data/Products'

const ProductPage = () => {
  return (
    <GridContainer>
      {products.map((product) => (
        <Card key={product.id}>
          <h2>{product.name}</h2>
          <p>₹{product.price}</p>
          <button>Add to Cart</button>
        </Card>
      ))}
    </GridContainer>
  );
}

export default ProductPage