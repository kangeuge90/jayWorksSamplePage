import { Link } from 'react-router-dom'
import './Nav.css'
import LogInPic from './assets/login.jpeg'
import HomePic from './assets/home.png'
import emailPic from './assets/JayMail.png'

function Nav() {
    return (
        <div className="navContainer">
            {/* <div className="opacityNavContainer"> */}
                <Link to="/jayworkssamplepage">
                    <img id='homePic' src={HomePic}></img>
                </Link>
                <Link to="/jayworkssamplepage/login">
                    <img src={LogInPic}></img>
                </Link>
                <Link to="/jayworkssamplepage/contactus">
                    <img id="contactUsPic" src={emailPic}></img>
                </Link>
            {/* </div> */}
        </div>
    )
}

export default Nav;