import { ReactComponent as Y } from '../assets/images/youtube.svg';
import { ReactComponent as I } from '../assets/images/instagram.svg';
import { ReactComponent as L } from '../assets/images/linkedin.svg';
import './styles.css'

export default function Footer() {
  return (

    <footer className="main-footer">
      App desenvolvido durante a 2a edição do evento Semana DevSuperior
      <div className="footer-icons">
        <a href="http://" target="_blank" rel="noopener noreferrer"><Y /></a>
        <a href="http://" target="_blank" rel="noopener noreferrer"><I /></a>
        <a href="http://" target="_blank" rel="noopener noreferrer"><L /></a>
      </div>
    </footer>

  )
}