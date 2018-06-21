import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import ROOT_URL from './config';

export default class Billing extends React.Component {
  onToken = token => {
    axios
      .post(`${ROOT_URL}/billing`, { token })
      .then(res => {
        alert('Payment Recieved');
      })
      .catch(err => {
        alert('Error with payment.');
      });
  };

  // ...

  render() {
    return (
      // ...
      <div className="BillingWrapper">
        <h1>Billing</h1>
        <p>
          We have 2 plans: Pay for 1 decision = $1.99 USD. Subscribe for monthly fee of 20 bucks.
        </p>
        <StripeCheckout
          name="Jobseekr" // the pop-in header title
          description="Making the job hunt enjoyable." // the pop-in header subtitle
          ComponentClass="div"
          panelLabel="Pay Now" // prepended to the amount in the bottom pay button
          amount={199} // cents
          currency="USD"
          stripeKey="pk_test_CLch1llaqkMyrh2vohpoGmu7"
          locale="auto"
          // Note: Enabling either address option will give the user the ability to
          // fill out both. Addresses are sent as a second parameter in the token callback.
          // shippingAddress
          billingAddress={false}
          // Note: enabling both zipCode checks and billing or shipping address will
          // cause zipCheck to be pulled from billing address (set to shipping if none provided).
          zipCode={false}
          //alipay // accept Alipay (default false)
          //bitcoin // accept Bitcoins (default false)
          allowRememberMe // "Remember Me" option (default true)
          token={this.onToken} // submit callback
          opened={this.onOpened} // called when the checkout popin is opened (no IE6/7)
          closed={this.onClosed} // called when the checkout popin is closed (no IE6/7)
          // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
          // you are using multiple stripe keys
          reconfigureOnUpdate={false}
          // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
          // useful if you're using React-Tap-Event-Plugin
          triggerEvent="onClick"
        />
      </div>
    );
  }
}
