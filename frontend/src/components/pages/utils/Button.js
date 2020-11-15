import React from "react";
import { Link } from "react-router-dom";

function Button({ product }) {
  return (
    <div className="row_btn">
      <Link id="btn_buy">Buy</Link>
      <Link id="btn_view" to={`/detail/${product._id}`}>
        View
      </Link>
    </div>
  );
}

export default Button;
