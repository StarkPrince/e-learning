import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../actions/userActions';

const SignIn = ({ signIn }) =>
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () =>
    {
        signIn(username, password);
    };

    return (
        <form>
            <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="button" onClick={handleSignIn}>Sign In</button>
        </form>
    );
};

export default connect(null, { signIn })(SignIn);
