import React, { useRef } from "react";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { Button } from "primereact/button";
import { useState } from "react";
// theme
import "primereact/resources/themes/lara-light-cyan/theme.css";
export default function ShoppingWizard() {
  const stepperRef = useRef(null);

  return (
    <div className="section-width shop_wizard">
      <h1 className="page_title">cart</h1>
      <Stepper ref={stepperRef} style={{ flexBasis: "50rem" }}>
        <StepperPanel header="Shopping Bag">
          <WizardCart />
        </StepperPanel>
        <StepperPanel header="Shipping and checkout">
          <div className="flex flex-column h-12rem">
            <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
              Content II
            </div>
          </div>
          <div className="flex pt-4 justify-content-between">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              onClick={() => stepperRef.current.prevCallback()}
            />
            <Button
              label="Next"
              icon="pi pi-arrow-right"
              iconPos="right"
              onClick={() => stepperRef.current.nextCallback()}
            />
          </div>
        </StepperPanel>
        <StepperPanel header="confirmation">
          <div className="flex flex-column h-12rem">
            <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
              Content III
            </div>
          </div>
          <div className="flex pt-4 justify-content-start">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              onClick={() => stepperRef.current.prevCallback()}
            />
          </div>
        </StepperPanel>
      </Stepper>
    </div>
  );
}

export function WizardCart() {
  return (
    <div className="wizard_cart">
      <div className="wizard_cart-products">
        <table className="wizard_cart-table"></table>
      </div>
      <div className="wizard_cart-totals">
        <div className="cart_total-container">
          <h4>cart totals</h4>
          <div>
            <label>subtotal</label>
            <span>$265</span>
          </div>
          <div className="shipping">
            <CheckboxAsRadio />
          </div>
        </div>
        <button className="secondary-btn">proceed to checkout</button>
      </div>
    </div>
  );
}

export function CheckboxAsRadio() {
  // State to hold the selected option
  const [selectedOption, setSelectedOption] = useState(null);

  // Options for the selection
  const options = [
    { id: "option1", label: "Option 1" },
    { id: "option2", label: "Option 2" },
    { id: "option3", label: "Option 3" },
  ];

  // Handle change event
  const handleChange = (id) => {
    setSelectedOption(id);
  };

  return (
    <div>
      <h3>Select an option:</h3>
      {options.map((option) => (
        <label key={option.id} style={{ display: "block" }}>
          <input
            type="checkbox"
            // Controlled checkbox logic
            checked={selectedOption === option.id}
            onChange={() => handleChange(option.id)}
            style={{
              appearance: "none", // Customize appearance
              width: "20px",
              height: "20px",
              marginRight: "8px",
              cursor: "pointer",
            }}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}
