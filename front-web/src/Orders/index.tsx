import './styles.css'
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import { useEffect, useState } from 'react';
import { OrderLocationData, Product } from './types';
import api from './api';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import Footer from '../Footer';
import { isSelected } from './helpers';
import { toast } from 'react-toastify';
import Message from './Message';

export default function Orders() {
  const [error, setError] = useState(false)
  const [loaded, setLoaded] = useState(false)

  const [products, setProducts] = useState<Product[]>([])
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>()
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const totalPrice = selectedProducts.reduce((sum, item) => {
    return sum + item.price
  }, 0)

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoaded(false)
        toast.info('Estamos trazendo os melhores produtos', {
          autoClose: 20000
        })

        const res = await api.get('/products')
        setProducts(res.data)

      } catch (error) {
        toast.warning('Erro ao trazer produtos');
        setError(error)
      } finally {
        setLoaded(true)
      }
    }
    getProducts()
  }, []);

  const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = isSelected(selectedProducts, product)

    if (isAlreadySelected) {
      const selected = selectedProducts.filter(item => item.id !== product.id);
      setSelectedProducts(selected);
    } else {
      setSelectedProducts(previous => [...previous, product]);
    }
  }

  const handleSubmit = async () => {
    try {
      setLoaded(false)
      setError(false)

      const productsIds = selectedProducts.map(({ id }) => ({ id }));
      const payload = {
        ...orderLocation!,
        products: productsIds
      }

      const res = await api.post('/orders', payload)

      toast.error('Pedido enviado com sucesso! N°' + res.data.id);
      setSelectedProducts([]);
    } catch (error) {
      toast.warning('Erro ao enviar pedido');
      setError(error)

    } finally {
      setLoaded(true)
    }

  }
  return (
    <div className="orders-container">
      <StepsHeader />
      {
        !loaded ?
          <Message message="Por favor, aguarde" />
          :
          error ?
            <Message message="Ops, ocorreu um erro!" />
            :
            <>
              <ProductsList
                products={products}
                onSelectProduct={handleSelectProduct}
                selectedProducts={selectedProducts}
              />
              <OrderLocation
                onChangeLocation={location => setOrderLocation(location)}
              />
              <OrderSummary
                onSubmit={handleSubmit}
                amount={selectedProducts.length}
                totalPrice={totalPrice}
              />
              <Footer />
            </>
      }
    </div>
  )
}