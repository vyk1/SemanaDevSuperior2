import { isSelected } from './helpers'
import ProductsCard from './ProductsCard'
import './styles.css'
import { ProductsListProps } from './types'

export default function ProductsList({ selectedProducts, products, onSelectProduct }: ProductsListProps) {
  return (
    <div className="orders-list-container">
      <div className="orders-list-items">
        {
          products.map(p => (
            <ProductsCard
              key={p.id}
              product={p}
              isSelected={isSelected(selectedProducts, p)}
              onSelectProduct={onSelectProduct}
            />
          ))
        }
      </div>
    </div>
  )
}