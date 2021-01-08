import { formatPrice } from './helpers'
import './styles.css'
import { ProductProps } from './types'


export default function ProductsCard({ product, onSelectProduct, isSelected }: ProductProps) {

  return (
    <div className={`order-card-container ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelectProduct(product)}>
      <h3 className="order-card-title">{product.name}</h3>
      <img src={product.imageUri} className="order-card-image" alt="x" />
      <h3 className="order-card-price">
        {formatPrice(product.price)}
      </h3>
      <div className="order-card-description">
        <h3>Descrição</h3>
        <p>{product.description}</p>
      </div>
    </div>
  )
}