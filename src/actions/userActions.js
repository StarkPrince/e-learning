import axios from 'axios';
import bcrypt from 'bcryptjs';

export const signIn = (username, password) =>
{
    return async dispatch =>
    {
        const response = await axios.get(`http://localhost:3001/users?username=${username}`);
        const user = response.data[0];

        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordMatch) {
                dispatch({ type: 'SIGN_IN', payload: user });
            } else {
                alert('Invalid credentials');
            }
        } else {
            alert('User not found');
        }
    };
};

export const signOut = () =>
{
    return { type: 'SIGN_OUT' };
};
