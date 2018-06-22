import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import ROOT_URL from './config';

export default class Billing extends React.Component {
  subscribe = null;
  onToken = token => {
    axios
      .post(`${ROOT_URL}/billing`, { token, email: token.email, subscribe: this.subscribe })
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
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Billing</h1>
            <StripeCheckout
              name="Jobseekr" // the pop-in header title
              description="Single Decision" // the pop-in header subtitle
              ComponentClass="div"
              panelLabel="Single Decision" // prepended to the amount in the bottom pay button
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
            >
              <div
                className="singleDecision"
                onClick={() => {
                  this.subscribe = false;
                }}
              >
                <h2>Single Decision</h2>
                <p>You can choose to pay for one decision for 2 dollars.</p>
              </div>
            </StripeCheckout>{' '}
            <StripeCheckout
              name="Jobseekr" // the pop-in header title
              description="Making the job hunt enjoyable." // the pop-in header subtitle
              ComponentClass="div"
              panelLabel="Membership" // prepended to the amount in the bottom pay button
              amount={2000} // cents
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
            >
              <div
                className="membership"
                onClick={() => {
                  this.subscribe = true;
                }}
              >
                <h2>Membership</h2>

                <p class="lead">
                  Become a Member: Members get unlimited access to our full suite of jobhunting
                  tools as well as early access to new tools to give you an edge. 20 bucks and
                  handshake gets you a monthly membership.
                </p>
              </div>
            </StripeCheckout>{' '}
          </div>
        </div>
      </div>
    );
  }
}
