import './Contact.css'
import emailPic from './assets/JayMail.png'

function Contact() {
    return(
        <div className='contactContainer'>
            <img src={emailPic}></img>
            <p>Email: </p>
            <p>Phone Number: </p>
            <p>Address: </p>
        </div>
    )
}

export default Contact;