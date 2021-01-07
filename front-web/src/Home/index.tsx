import './styles.css'
import { ReactComponent } from '../assets/images/main.svg';

export default function Home() {
  return (

    <div className="home-container">
      <div className="home-content">
        <div className="home-actions">
          <h1 className="home-title">
            Faça seu pedido
          <br /> que entregamos
          <br /> para você
        </h1>
          <h3 className="home-subtitle">
            Escolha seu pedido e em poucos min <br />
          leveremos na sua casa
        </h3>
          <a href="orders" className="home-btn-order">FAZER PEDIDO</a>
        </div>
        <div className="home-image">
          <ReactComponent />
        </div>
      </div>
    </div>
  )
}