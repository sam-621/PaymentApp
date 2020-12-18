import React from 'react';
import '../../style/container/Payment.css';
import { PayPalButton } from 'react-paypal-button-v2';

const Payment = ({ amount }) => {
  const clientId = process.env.CLIENTID;
  return (
    <div className="Payment">
      <h1>Pay with paypal</h1>
      <PayPalButton
        amount={amount}
        onSuccess={(details, data) => console.log({ details, data })}
        onError={(err) => console.log(err)}
        options={{
          clientId: clientId,
        }}
      />
    </div>
  );
};

export default Payment;
