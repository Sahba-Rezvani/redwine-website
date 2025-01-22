// import React, { Component } from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

export function Discount() {
  return (
    <div className="discount-box section-width">
      <div className="discount-text-group">
        <span className="line"></span>
        <p>deal of the week</p>
      </div>

      <h2 className="discount-title">
        <strong>spring</strong> collection
      </h2>
      <button className="btn shop-now-btn">Shop now &rarr; </button>

      <div className="timer-box">
        <FlipClockCountdown
          className="flip-clock"
          to={new Date().getTime() + 30 * 60 * 1000 + 5000}
          labels={["days", "hours", "minutes", "seconds"]}
          labelStyle={{
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
          digitBlockStyle={{ width: 30, height: 50, fontSize: 25 }}
          duration={0.5}
        >
          Finished
        </FlipClockCountdown>
      </div>
    </div>
  );
}
