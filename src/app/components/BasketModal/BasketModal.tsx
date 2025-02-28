"use client";

import React from "react";
import "./BasketModal.scss";
import { useStore } from "@/store/useStore";
import Link from "next/link";

export default function BasketModal() {
  const { isBasketOpen, setIsBasketOpen } = useStore();
  if (!isBasketOpen) return null;
  return (
    <div className="BasketModal">
      <div
        className="transparence"
        onClick={() => setIsBasketOpen(false)}
      ></div>
      <div className="menu">
        <header>
          <h2>Panier</h2>
          <button
            className="closeBasketButton"
            onClick={() => setIsBasketOpen(false)}
          >
            <img src="/icons/close.png" alt="" />
          </button>
        </header>
        <section className="basket_articles">
          <div className="article">
            <div className="imageContainer">
              <img
                src="/bague-zelda-or-jaune-14k-rubis-Emmanuelle-Zysman.webp"
                alt=""
              />
              <button className="deleteButton">
                <img src="/icons/close.png" alt="" />
              </button>
            </div>
            <div className="informationsContainer">
              <h3>Bague Zelda</h3>

              <span>800&euro;</span>
            </div>
          </div>
          <div className="article">
            <div className="imageContainer">
              <img
                src="/bague-zelda-or-jaune-14k-rubis-Emmanuelle-Zysman.webp"
                alt=""
              />
              <button className="deleteButton">
                <img src="/icons/close.png" alt="" />
              </button>
            </div>
            <div className="informationsContainer">
              <h3>Bague Zelda</h3>

              <span>800&euro;</span>
            </div>
          </div>
          <div className="article">
            <div className="imageContainer">
              <img
                src="/bague-zelda-or-jaune-14k-rubis-Emmanuelle-Zysman.webp"
                alt=""
              />
              <button className="deleteButton">
                <img src="/icons/close.png" alt="" />
              </button>
            </div>
            <div className="informationsContainer">
              <h3>Bague Zelda</h3>

              <span>800&euro;</span>
            </div>
          </div>
          <div className="article">
            <div className="imageContainer">
              <img
                src="/bague-zelda-or-jaune-14k-rubis-Emmanuelle-Zysman.webp"
                alt=""
              />
              <button className="deleteButton">
                <img src="/icons/close.png" alt="" />
              </button>
            </div>
            <div className="informationsContainer">
              <h3>Bague Zelda</h3>

              <span>800&euro;</span>
            </div>
          </div>
        </section>
        <div className="totalDiv">
          <span className="total">Total :</span>
          <span className="totalPrice">800 &euro;</span>
        </div>
        <div className="buttonDiv">
          <Link href="/unavailable">
            <button onClick={() => setIsBasketOpen(false)}>Payer</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
