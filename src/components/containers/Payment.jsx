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

  function failurePayment(err) {
    console.log(err.handleErrors);
    alert(`An error has occurred in your pay, reload the page and try again`);
  }

  return (
    <div className="Payment">
      <h1>Pay with paypal</h1>
      {/*https://developer.paypal.com/docs/checkout/reference/customize-sdk/*/}
      <PayPalButton
        amount={amount}
        onSuccess={successPayment}
        onError={failurePayment}
        catchError={failurePayment}
        options={{
          clientId: clientId,
          currency: 'USD',
        }}
      />
    </div>
  );
};

export default Payment;
