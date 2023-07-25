import React from 'react';

const Payment = () =>
{
    return (
        <div>
            <h1>Payment</h1>
            <form>
                <input type="text" placeholder="Card Number" />
                <input type="text" placeholder="Card Holder Name" />
                <input type="text" placeholder="Expiry Date" />
                <input type="text" placeholder="CVV" />
                <button type="submit">Pay</button>
            </form>
        </div>
    );
};

export default Payment;
