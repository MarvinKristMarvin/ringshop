"use client";

import React from "react";
import "./FixedButtons.scss";

interface FixedButtonsProps {
  setIsFilterOpen: (isOpen: boolean) => void;
}

export default function FixedButtons({ setIsFilterOpen }: FixedButtonsProps) {
  return (
    <section className="FixedButtons">
      <div className="buttons">
        <button onClick={() => setIsFilterOpen(true)}>FILTRER</button>
      </div>
    </section>
  );
}
