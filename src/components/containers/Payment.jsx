import React from 'react';
import '../../style/container/Payment.css';
import { PayPalButton } from 'react-paypal-button-v2';

const Payment = ({ amount, planName }) => {
  const clientId = process.env.CLIENTID;

  function successPayment(details, data) {
    if (details.status === 'COMPLETED') {
      window.location.href = `/${planName}/success`;
    }
  }

  return (
    <div className="Payment">
      <h1>Pay with paypal</h1>
      {/*https://developer.paypal.com/docs/checkout/reference/customize-sdk/*/}
      <PayPalButton
        amount={amount}
        onSuccess={successPayment}
        options={{
          clientId: clientId,
          currency: 'MXN',
        }}
      />
    </div>
  );
};

export default Payment;
