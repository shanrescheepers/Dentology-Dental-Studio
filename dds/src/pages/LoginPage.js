
import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';

function LoginPage() {
    const adminUser = {

        email: "admin@admin.com",
        password: "admin123"
    }

    // get array back from my setstate functions
    // setuser -> get user data, once logged in this state will be set. Get name and email adress to save
    const [user, setUser] = useState({ name: "", email: "" });
    // error to catch if details arent correct, with message error to display
    const [error, setError] = useState("");


    // function to be called when receptionist attempts to log in ... (details) in hakkies of nie?
    const Login = details => {
        console.log(details);
        // 
        if (details.email == adminUser.email && details.password == adminUser.password) {
            console.log("You're logged in!"); //Login created, now for the logout//
            // pass in new array with set user
            setUser({
                // pass the following through obvs
                name: details.name,
                email: details.email,
            })
        }
        else {
            console.log("Details do not match");
            // set error here
            setError("Details do not match");
        }
    }

    const Logout = () => {
        console.log("logout");
        // below will set user and log us out. but call this in the button below
        setUser({ name: "", email: "" });
    }

    return (

        <div className="Login">
            {/* run a turnery operator. user email is not equal to nothing, then render a welcome screen */}

            {
                (user.email != '') ? (
                    // welcome screen/dash land
                    <div className='welcome'>
                        <h2> Welcome, <span>{user.name}</span></h2>
                        <button onClick={Logout} >Logout</button>
                    </div>
                    // if we arent logged in we are going to display so
                ) : (
                    // if there is an error, we'll display an error, if there isn't an error, we won't
                    // pass ythrough Login, call it fromom inside
                    <LoginForm Login={Login} error={error} />

                )
            };


        </div >
    )
}
export default LoginPage;