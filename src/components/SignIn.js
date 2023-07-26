import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../actions/userActions';

const SignIn = ({ signIn }) =>
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        signIn({ email, password });
        setEmail('');
        setPassword('');
    };

    return (
        <div className="signin-container">
            <form onSubmit={handleSubmit} className="signin-form">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="signin-input"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="signin-input"
                />
                <button type="submit" className="signin-submit">Sign In</button>
            </form>
        </div>
    );
};

export default connect(null, { signIn })(SignIn);
