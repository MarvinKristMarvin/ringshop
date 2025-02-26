import React from "react";

export default function ProductPage() {
  return (
    <main className="ProductPage">
      <section className="product">
        <div className="imageContainer">
          <img
            src="/bague-zelda-or-jaune-14k-rubis-Emmanuelle-Zysman.webp"
            alt=""
          />
        </div>
        <div className="informationsContainer">
          <h2>Bague Zelda</h2>
          <span>800 &euro;</span>
          <p className="description">
            Gold and Ruby, Diamond, Emerald, and so on to make a longer
            description.
          </p>
          <p className="informations">
            Nous prendrons contact avec vous afin de déterminer la taille idéale
            de votre anneau, bague, chaîne ou bracelet
          </p>
          <div className="buttons">
            <button className="addToBasket">Ajouter au panier</button>
            <button className="buyNow">Acheter maintenant</button>
          </div>
        </div>
      </section>
    </main>
  );
}
