import React from "react";
import "./BasketModal.scss";

export default function BasketModal() {
  return (
    <div className="BasketModal">
      <div className="transparence"></div>
      <div className="menu">
        <header>
          <h2>Panier</h2>
          <button>
            <img src="icons/close.png" alt="" />
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
          <button>Payer</button>
        </div>
      </div>
    </div>
  );
}
