import { Link } from 'react-router-dom';
import './Navigation.css';
import logo from '../assets/guitarStore-logo.webp';

function Navigation() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt='Guitar Store'></img>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/productos">Productos</Link></li> 
                <li><Link to="/checkout">Checkout</Link></li>
                <li><Link to="/confirmation">Confirmation</Link></li>
                <li><Link to="/admin-account">Admin Account</Link></li>
            </ul>
            <div className="navbar-icons">
                <span className="icon-search">🔍</span>
                <span className="icon-cart">🛒</span>
                <span className="icon-login">👤</span>
            </div>
        </nav>
    );
}

export default Navigation;
