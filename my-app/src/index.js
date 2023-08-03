import React from "react";
import ReactDOM from "react-dom/client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const stripePromise = loadStripe("pk_test_51NOYLPKNHM092Bt6x5egM24zoVt8DopST0EvM6ogZGUXoFqkWVeaT7NUyZpEbekNx7r3BDOyGo5b2Y0h0S9rR1oO00zYlQSqnc");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
