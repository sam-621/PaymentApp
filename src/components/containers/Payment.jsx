import React from 'react';
import '../../style/container/Payment.css';
import { PayPalButton } from 'react-paypal-button-v2';

const Payment = ({ amount, planName }) => {
  const clientId =
    process.env.NODE_ENV === 'development'
      ? process.env.CLIENTID_DEV
      : process.env.CLIENTID_PROD;

  function onSuccess(details, data) {
    if (details.status === 'COMPLETED') {
      window.location.href = `/${planName}/success`;
    }
  }

  function createOrder(data, actions) {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amount,
          },
        },
      ],
    });
  }

  return (
    <div className="Payment">
      <h1>Pay with paypal</h1>
      <PayPalButton
        amount={amount}
        onSuccess={onSuccess}
        createOrder={createOrder}
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
