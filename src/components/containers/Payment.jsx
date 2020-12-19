import React from 'react';
import '../../style/container/Payment.css';
import { PayPalButton } from 'react-paypal-button-v2';

const Payment = ({ amount, planName }) => {
  const clientId =
    process.env.NODE_ENV === 'development'
      ? process.env.CLIENTID_DEV
      : process.env.CLIENTID_PROD;

  function successPayment(details, data) {
    if (details.status === 'COMPLETED') {
      window.location.href = `/${planName}/success`;
    }
  }

  return (
    <div className="Payment">
      <h1>Pay with paypal</h1>
      <PayPalButton
        amount={amount}
        onSuccess={successPayment}
        options={{
          clientId: clientId,
          currency: 'MXN',
        }}
        style={{
          label: 'pay',
        }}
      />
    </div>
  );
};

export default Payment;
