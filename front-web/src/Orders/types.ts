export type Product = {
  id: number,
  name: string,
  price: number,
  description: string,
  imageUri: string,
}

export type OrderSummaryProps = {
  amount: number,
  totalPrice: number,
  onSubmit: () => void
}

export type OrderLocationData = {
  address: string,
  latitude: number,
  longitude: number,
}

export type ProductProps = {
  isSelected: boolean,
  product: Product,
  onSelectProduct: (product: Product) => void
}

export type ProductsListProps = {
  products: Product[],
  onSelectProduct: (product: Product) => void,
  selectedProducts: Product[]
}

export type ProductId = {
  id: number
}

export type OrderPayload = {
  products: ProductId[],
} & OrderLocationData

export type MessageProps = {
  message: string
}