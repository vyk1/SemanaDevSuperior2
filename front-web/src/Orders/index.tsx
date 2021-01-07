import './styles.css'
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import { useEffect, useState } from 'react';
import { Product } from './types';
import api from './api';

export default function Orders() {
  const [products, setProducts] = useState<Product[]>([])
  const [error, setError] = useState('')
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoaded(true)
        const res = await api.get('/products')
        setProducts(res.data)

      } catch (error) {
        console.log(error)
        setError(error)
      } finally {
        setLoaded(true)
      }
    }
    getProducts()
  }, []);

  return (
    <div className="orders-container">
      <StepsHeader />
      {
        !loaded ?
          <p>await</p>
          :
          error ? <p>ops</p>
            :
            <ProductsList products={products} />
      }
    </div>
  )
}