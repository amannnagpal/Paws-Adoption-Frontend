import GooglePayButton from '@google-pay/button-react';
import qr from '../images/qr.png';
import '../styles/Donate.css';
function Donate() {
  return (
    <div class='back'>
      <center>
        <br></br>
        <h2 class='a'>
          <i>
            "Saving one pet won't change the world,but for that one pet the
            world will change forever."
          </i>
        </h2>

        <img
          className='position-absolute top-50 start-50 translate-middle'
          src={qr}
          alt='qr'
        />
        <br></br>
        <br></br>
        <GooglePayButton
          environment='TEST'
          paymentRequest={{
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [
              {
                type: 'CARD',
                parameters: {
                  allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                  allowedCardNetworks: ['MASTERCARD', 'VISA'],
                },
                tokenizationSpecification: {
                  type: 'PAYMENT_GATEWAY',
                  parameters: {
                    gateway: 'example',
                    gatewayMerchantId: 'exampleGatewayMerchantId',
                  },
                },
              },
            ],
            merchantInfo: {
              merchantId: '12345678901234567890',
              merchantName: 'Demo Merchant',
            },
            transactionInfo: {
              totalPriceStatus: 'FINAL',
              totalPriceLabel: 'Total',
              totalPrice: '1',
              currencyCode: 'USD',
              countryCode: 'US',
            },
            shippingAddressRequired: true,
            callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
          }}
          onLoadPaymentData={(paymentRequest) => {
            console.log('Success', paymentRequest);
          }}
          onPaymentAuthorized={(paymentData) => {
            console.log('Payment Authorised Success', paymentData);
            return { transactionState: 'SUCCESS' };
          }}
          onPaymentDataChanged={(paymentData) => {
            console.log('On Payment Data Changed', paymentData);
            return {};
          }}
          existingPaymentMethodRequired='false'
          buttonColor='white'
          buttonType='plain'
        />
      </center>
    </div>
  );
}

export default Donate;
