import React, { useState } from 'react';
import '../css/login.css';
// import PropTypes from 'prop-types';

// LoginForm.propTypes = {
// set login form
// prevent reload
// /CRUD with php my sql
// watch video
//error message with wrong "receptionist input"
// };
// destructure the login form. This will pass through from props (as an obj). Get props (Login, error)
function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({ name: "", email: "", password: "" });

    // Now for a function/method, to handle the submit
    const submitHandler = e => {
        // page should not rerender
        e.preventDefault();
        // Now call the login function we passed through as a Prop , and then just pass through the details
        Login(details);
        // this will pass through the details. Go to <form and edit the prop in there
    }
    return (
        <form onSubmit={submitHandler} >
            {/* this will call the submithandler fnuction Test In Console */}
            <div className='form-inner form-svg'>
                <div className='inner'>


                    <h2> WELCOME BACK!</h2>
                    {/* Error This will be a turnery too */}
                    {(error != "") ? (<div className='error'>{error}</div>) : ""}
                    {/* go and set thee error!!! otherwise niks will happen */}
                    <div className='form-group name'>
                        <label htmlFor='name'>Name: </label>
                        {/* pass through event in onChnge, set the details, call the funcrion, pass through ibject...details */}
                        <input type='text' name='name' id='name' onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />
                    </div>
                    <div className='form-group email'>
                        <label htmlFor='email'>Email: </label>
                        <input type='email' name='email' id='email' onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                    </div>
                    <div className='form-group password'>
                        <label htmlFor='password'>Password: </label>
                        <input type='password' name='password' id='password' onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    </div>
                    <p className='forgot-your-password'>Forgot your password?
                    </p>
                    <input type='submit' value="LOGIN" className='login' />
                    {/* <button onSubmit={submitHandler}>SUBMIT</button> */}
                    <div className='login-svg'></div>
                    <hr />
                    <p className='slogan'>Aesthetic Dentists changing one smile at a time</p>
                </div>
            </div>
        </form>

    );
}

export default LoginForm;