import React from "react";
import axios from "axios";

function PaypalButton({ total, cart }) {
  const buy = async () => {
    console.log(total, cart);
  };

  return (
    <div>
      <button
        onClick={() => {
          buy();
        }}
      >
        BUY
      </button>
    </div>
  );
}

export default PaypalButton;
