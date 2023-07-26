import React from 'react';

const Payment = () =>
{
    return (
        <div className="payment-container">
            <h1>Payment Page</h1>
            <form className="payment-form">
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
