import product from "../product"

const Price = () => {
  return <p className="price">${product.price.toFixed(2)}</p>
}

export default Price

