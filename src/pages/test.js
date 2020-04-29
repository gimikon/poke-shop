// import React from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import {
//   Elements,
//   CardElement,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import logo from "./pokeshop.png";

// const stripePromise = loadStripe("pk_test_wwtIbkjfR6nqZsBaM9J3q0Is00bsjUuye9");

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: elements.getElement(CardElement),
//     });
//     if (!error) {
//       const { id } = paymentMethod;

//       try {
//         const { data } = await axios.post("/api/charge", { id, amount: 1099 });
//         console.log(data);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

//   return (
//     <form
//       style={{ maxWidth: "400px", margin: "0 auto" }}
//       onSubmit={handleSubmit}
//     >
//       <img src={logo} style={{ height: "15rem" }} />
//       <CardElement />
//       <Link to="/success">
//         <button
//           type="submit"
//           disabled={!stripe}
//           className="btn btn-primary"
//           style={{ display: "block", margin:'0 auto', marginTop:'4rem' }}
//         >
//           Pay
//         </button>
//       </Link>
//     </form>
//   );
// };

// const Test = () => {
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutForm />
//     </Elements>
//   );
// };

// export default Test;
