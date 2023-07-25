import React from 'react';

const SignIn = () =>
{
    return (
        <div>
            <h1>Sign In</h1>
            <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default SignIn;
