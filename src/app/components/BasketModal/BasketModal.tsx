"use client";

import React from "react";
import "./BasketModal.scss";
import { useStore } from "@/store/useStore";
import Link from "next/link";
import { useState } from "react";

export default function BasketModal() {
  const {
    isBasketOpen,
    setIsBasketOpen,
    productsInBasket,
    setProductsInBasket,
  } = useStore();

  const totalPrice = productsInBasket.reduce(
    (acc, product) => acc + product.price,
    0
  );

  /* const handleRemoveItem = (indexToRemove: number) => {
    const updatedBasket = [...productsInBasket];
    updatedBasket.splice(indexToRemove, 1);
    setProductsInBasket(updatedBasket);
  };*/

  const [removingIndex, setRemovingIndex] = useState<number | null>();

  const handleRemoveItem = (indexToRemove: number) => {
    // First set the removing state to trigger the animation
    setRemovingIndex(indexToRemove);

    // Then remove the item after the animation duration
    setTimeout(() => {
      const updatedBasket = [...productsInBasket];
      updatedBasket.splice(indexToRemove, 1);
      setProductsInBasket(updatedBasket);
      setRemovingIndex(null);
    }, 100); // Duration should match your CSS transition time
  };

  if (!isBasketOpen) return null;
  return (
    <div className="BasketModal">
      <div
        className="transparence"
        onClick={() => setIsBasketOpen(false)}
      ></div>
      <div className="menu">
        <header>
          <h2>Mon panier</h2>
          <button
            className="closeBasketButton"
            onClick={() => setIsBasketOpen(false)}
          >
            <img src="/icons/close.png" alt="" />
          </button>
        </header>
        <section className="basket_articles">
          {productsInBasket.map((product, index) => (
            <div
              className={`article ${removingIndex === index ? "removing" : ""}`}
              key={`${product.id}-${index}`}
            >
              <div className="imageContainer">
                <img
                  src={`/${product.category}/${product.image}.webp`}
                  alt=""
                />
                <button
                  className="deleteButton"
                  onClick={() => handleRemoveItem(index)}
                >
                  <img src="/icons/close.png" alt="" />
                </button>
              </div>
              <div className="informationsContainer">
                <h3>{product.name}</h3>
                <span>{product.price} &euro;</span>
              </div>
            </div>
          ))}
        </section>
        <div className="totalDiv">
          <span className="total">Total :</span>
          <span className="totalPrice">{totalPrice} &euro;</span>
        </div>
        <div className="buttonDiv">
          <Link href="/payment">
            <button onClick={() => setIsBasketOpen(false)}>Payer</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
