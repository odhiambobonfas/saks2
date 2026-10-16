import React from "react";
import GiftCardReveal from "./GiftCardReveal";

export default function App() {
  return (
    <div className="page">
      <GiftCardReveal
        cardNumber="6366400057525054"
        pin="4253"
        amount={25.0}
        currency="USD"
      />
    </div>
  );
}
