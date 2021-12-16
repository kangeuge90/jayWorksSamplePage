import { Link } from 'react-router-dom'

function LogIn() {
    return (
        <div className="logInContainer">
            <form className="logInForm">
                {/* onSubmit={} -----ENTER LATER FOR FORM SUBMIT */}
                
                <p>
                    <label>Username/Email: </label> <input></input>
                </p>

                <p>
                    <label>Password: </label> <input></input>
                </p>

            </form>
        </div>
    )
}

export default LogIn;