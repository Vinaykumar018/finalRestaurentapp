// import React from 'react';
// import { loadStripe } from "@stripe/react-stripe-js";
// import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';

// const stripePromise = loadStripe("pk_test_51P7LufSJKV2FdywSKg9jYSuGG6mRHyEE1p5UCwv9cMMTYx4fTVVjl2ntG1LTGaHwMpOvSWUca0oZ2iFGPWDil2rp00AyaXfuma");

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: elements.getElement(CardElement),
//     });

//     if (error) {
//       console.error(error.message);
//     } else {
//       console.log(paymentMethod);
//       // You can send paymentMethod.id to your server to complete the payment
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <button type="submit" disabled={!stripe}>
//         Pay
//       </button>
//     </form>
//   );
// };

// const PaymentForm = () => {
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutForm />
//     </Elements>
//   );
// };

// export default PaymentForm;
