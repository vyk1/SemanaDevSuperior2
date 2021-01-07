import './styles.css'
import { ReactComponent } from '../assets/images/main.svg';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
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
            <Link to="orders" className="home-btn-order">FAZER PEDIDO</Link>
          </div>
          <div className="home-image">
            <ReactComponent />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}