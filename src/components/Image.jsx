import product from '../product'

const Image = () => {
  return <img src={product.image || "/placeholder.svg"} alt={product.name} className="product-image" />
}

export default Image

