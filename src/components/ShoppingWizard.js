import React, { useRef, useState } from "react";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { Button } from "primereact/button";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Counter } from "./Counter";
import FloatingInput from "./InputFloatingLabel";
// theme
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { styled } from "@mui/material";

export default function ShoppingWizard({ products, quantity, setQuantity }) {
  const stepperRef = useRef(null);
  const [shipping, setShipping] = useState(null);
  const [boxing, setBoxing] = useState(null);
  const addedProducts = products.slice(5, 9);
  // const addedProducts=null;

  return (
    <div className="section-width shop_wizard">
      <h1 className="page_title">cart</h1>
      <Stepper ref={stepperRef} style={{ flexBasis: "50rem" }}>
        <StepperPanel header="Shopping Bag">
          <div className="wizard_cart">
            <div className="wizard_cart-products">
              <table className="wizard_cart-table">
                <thead>
                  <tr>
                    <th>product</th>
                    <th>price</th>
                    <th>quantity</th>
                    <th>subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {addedProducts.map((product) => (
                    <tr>
                      <td>
                        <div className="wizard_product">
                          <div className="wizard_product-img">
                            <img src={product.image} alt="added-pc" />
                          </div>
                          <div className="wizard_product-info">
                            <h4>{product.name}</h4>
                            <p>Color: #XXXXXX</p>
                            <p>Size: XX</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="wizard_product-price">${product.price}</p>
                      </td>
                      <td>
                        <Counter counter={quantity} setCounter={setQuantity} />
                      </td>
                      <td className="wizard_product-subtotal">$XX</td>
                      <td>
                        {" "}
                        <FontAwesomeIcon
                          className="wizard_product-remove"
                          icon={faXmark}
                        />{" "}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="wizard_cart-totals">
              <div className="cart_total-container">
                <h3>cart totals</h3>
                <table className="factor_table">
                  <tbody>
                    <tr>
                      <th>subtotal</th>
                      <td>$265</td>
                    </tr>
                    <tr>
                      <th>shipping</th>
                      <td>
                        {" "}
                        <div className="cart_total-check">
                          <form>
                            <label htmlFor="post">
                              <input
                                type="radio"
                                name="shipping"
                                value={shipping}
                                id="post"
                              />
                              Post ($2)
                            </label>
                            <label htmlFor="vip-post">
                              <input
                                type="radio"
                                name="shipping"
                                value={shipping}
                                id="vip-post"
                              />
                              VIP Post ($3)
                            </label>
                          </form>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>special boxing</th>
                      <td>
                        {" "}
                        <div className="cart_total-check">
                          <form>
                            <label htmlFor="post">
                              <input
                                type="radio"
                                name="boxing"
                                value={boxing}
                                id="post"
                              />
                              Normal boxing (free)
                            </label>
                            <label htmlFor="vip-post">
                              <input
                                type="radio"
                                name="boxing"
                                value={boxing}
                                id="vip-post"
                              />
                              Special boxing ($5)
                            </label>
                          </form>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "100%" }}>
                        <form className="coupon-form">
                          <input
                            type="text"
                            className="discount-coupon"
                            placeholder="Coupon Code"
                          />
                          <button className="tertiary-btn">submit</button>
                        </form>
                      </td>
                    </tr>
                    <tr>
                      <th>total</th>
                      <td>$288</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button
                className="secondary-btn"
                label="Next"
                icon="pi pi-arrow-right"
                iconPos="right"
                onClick={() => stepperRef.current.nextCallback()}
              >
                proceed to checkout
              </button>
            </div>
          </div>
        </StepperPanel>
        <StepperPanel header="Shipping and checkout">
          <div className="wizard_cart">
            <div className="wizard_cart-personal-info">
              <form>
                <h4>billing details</h4>
                <div className="form_inputs">
                  <div className="input-box">
                    {" "}
                    <FloatingInput
                      inputClassName="login-input"
                      labelClassName="login-label"
                      id="first-name"
                    >
                      Phone or email address
                    </FloatingInput>
                  </div>
                  <div className="input-box">
                    {" "}
                    <FloatingInput
                      inputClassName="login-input"
                      labelClassName="login-label"
                      id="last-name"
                    >
                      Phone or email address
                    </FloatingInput>
                  </div>
                  <div className="input-box">
                    {" "}
                    <FloatingInput
                      inputClassName="login-input"
                      labelClassName="login-label"
                      id="phone-number"
                    >
                      Phone or email address
                    </FloatingInput>
                  </div>
                  <div className="input-box">
                    {" "}
                    <FloatingInput
                      inputClassName="login-input"
                      labelClassName="login-label"
                      id="post-code"
                    >
                      Phone or email address
                    </FloatingInput>
                  </div>
                  <div className="input-box">
                    {" "}
                    <FloatingInput
                      inputClassName="login-input"
                      labelClassName="login-label"
                      id="city"
                    >
                      Phone or email address
                    </FloatingInput>
                  </div>
                  <div className="input-box">
                    {" "}
                    <FloatingInput
                      inputClassName="login-input"
                      labelClassName="login-label"
                      id="town"
                    >
                      Phone or email address
                    </FloatingInput>
                  </div>
                  <div className="form-textarea">
                    <label for="address">Address:</label>
                    <textarea
                      id="address"
                      name="address"
                      rows="4"
                      cols="50"
                      required
                      placeholder="Enter your full address here..."
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
            <div className="wizard_cart-totals">
              <div className="cart_total-container">
                <h3>your order</h3>
                <div className="order_table-container">
                  {" "}
                  <table className="order_table">
                    <thead>
                      <tr>
                        <th>product</th>
                        <th>subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {addedProducts.map((product) => (
                        <tr>
                          <td>{product.name} x X</td>
                          <td>${product.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <table className="factor_table">
                  <tbody>
                    <tr>
                      <th className="table-two-th">subtotal</th>
                      <td>$XX</td>
                    </tr>{" "}
                    <tr>
                      <th lassName="table-two-th">shipping</th>
                      <td>$XX</td>
                    </tr>{" "}
                    <tr>
                      <th lassName="table-two-th">boxing</th>
                      <td>$XX</td>
                    </tr>{" "}
                    <tr>
                      <th lassName="table-two-th">total</th>
                      <td>$XX</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button
                className="secondary-btn"
                label="Next"
                icon="pi pi-arrow-right"
                iconPos="right"
                onClick={() => stepperRef.current.nextCallback()}
              >
                proceed to checkout
              </button>
              <button
                className="secondary-btn"
                style={{
                  color: "#222",
                  backgroundColor: "#e4e4e4",
                  marginTop: "16px",
                }}
                label="Back"
                severity="secondary"
                icon="pi pi-arrow-left"
                onClick={() => stepperRef.current.prevCallback()}
              >
                go back
              </button>
            </div>
          </div>
        </StepperPanel>
        <StepperPanel header="confirmation">
          <div className="flex flex-column h-12rem">
            <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
              The user is redirected from the payment gateway to this section
              after paying the bill{" "}
            </div>
          </div>
        </StepperPanel>
      </Stepper>
    </div>
  );
}
