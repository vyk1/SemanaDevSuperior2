import ProductsCard from './ProductsCard'
import './styles.css'
import { Product } from './types'

type Props = {
  products: Product[]
}

export default function ProductsList({ products }: Props) {
  return (
    <div className="orders-list-container">
      <div className="orders-list-items">
        {
          products.map(p => (
            <ProductsCard
              key={p.id}
              product={p}
            />
          ))
        }
      </div>
    </div>
  )
}