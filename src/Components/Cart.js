import React from "react";
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';

function Cart({ cart, click }) {
  let cartIsEmpty = true;
  if (cart.length !== 0) {
    cartIsEmpty = false;
  }
  return (
    <div className="row cart-container">
      <div className="col-lg-8">
        <p>name</p>
        <p>email</p>
        <p>number</p>
        <p>address</p>
      </div>
      <div
        style={{ border: "1px solid rgba(0, 0, 0, 0.12)", paddingBottom: "3%", height: "30%"}}
        className="col-lg-4"
      >
        {cart.map((items, i) => (
          <li style={{ listStyle: "none" }} key={i}>
            <div className="row">
              <div
                style={{
                  borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                  width: "50%",
                }}
                className="col-lg-7 col-md-7 col-sm-7"
              >
                <img  className="cart-img" src={items.img} alt="" />
              </div>
              <div
                style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)"}}
                className="col-lg-5 col-md-5 col-sm-5 cart-d"
              >
                <p>{items.name}</p>
                <p>{`$${items.price}`}</p>
                {cartIsEmpty ? "" : <RemoveShoppingCartIcon style={{fontSize: "2rem"}} onClick={() => click(i)} />}
              </div>
            </div>
          </li>
        ))}
        <div style={{width: "70%", margin: "2% auto", fontSize: "1.5rem", fontWeight: "bold"}}>
          TOTAL <span style={{float: "right"}}>$
          {cart.reduce(function (a, b) {
            return Number(a) + Number(b.price);
          }, 0)}</span>
        </div>
        <button onClick={() => cartIsEmpty ? " " : alert("successful")}
          type="button"
          className="btn btn-dark btn-lg btn-block addtocart"
        >
          {cartIsEmpty ? "Cart is Empty" : "Checkout" }
        </button>
      </div>
    </div>
  );
}

export default Cart;
