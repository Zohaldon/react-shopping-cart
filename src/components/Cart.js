import React, { Component } from "react";
import formatCurrency from "../utils";

export default class Cart extends Component {
  render() {
    const { cartItems } = this.props;

    return (
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cart-header">This shopping cart is empty</div>
        ) : (
          <div className="cart cart-header">
            You have {cartItems.length} items in the cart{" "}
          </div>
        )}
        <div>
          <div className="cart">
            <ul className="cart-items">
              {cartItems.map((item) => (
                <li key={item.id}>
                  <div>
                    <img src={item.image} alt={item.title}></img>
                  </div>
                  <div>{item.title}</div>
                  <div>
                    {formatCurrency(item.price)} x {item.count}
                    <button
                      className=""
                      onClick={() => this.props.removeFromCart(item)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {cartItems.length !== 0 && (
            <div className="cart">
              <div className="total">
                <div>
                  Total:{" "}
                  {formatCurrency(
                    cartItems.reduce((a, c) => a + c.price * c.count, 0)
                  )}
                  <button className="button primary">Proceed</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
