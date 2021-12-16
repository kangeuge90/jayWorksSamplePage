import { Link } from 'react-router-dom'
import  HeaderLogo  from './assets/jayworkslogo1.png'

function Header() {
    return (
        <header className="headerContainer">
          <img src={HeaderLogo}></img>
        </header>
    )
}

export default Header;