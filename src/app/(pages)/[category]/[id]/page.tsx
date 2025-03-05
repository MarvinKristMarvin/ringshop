"use client";

import React from "react";
import { Product } from "@/types";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useStore } from "@/store/useStore";
import { toast } from "react-hot-toast";

export default function ProductPage() {
  const [product, setProduct] = useState<Product>();
  const params = useParams();
  const id = params.id;
  const { productsInBasket, setProductsInBasket, setIsBasketOpen } = useStore();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("/data/products.json");
        const data: Product[] = await res.json();
        const foundProduct = data.find((item) => String(item.id) === id); // Ensure string comparison
        setProduct(foundProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (product) {
    return (
      <main className="ProductPage">
        <section className="product">
          <div className="imageContainer">
            <img
              src={`/${product.category}/${product.image}.${product.format}`}
              alt=""
            />
          </div>
          <div className="informationsContainer">
            <h2>{product.name}</h2>
            <span>{product.price} &euro;</span>
            <p className="description">{product.description}</p>
            <p className="informations">
              Nous prendrons contact avec vous afin de déterminer la taille
              idéale de votre article.
            </p>
            <div className="buttons">
              <button
                className="addToBasket"
                onClick={() => {
                  setProductsInBasket([...productsInBasket, product]);
                  toast("Article ajouté au panier", {
                    duration: 3000,
                    style: {
                      background: "#efefef",
                      color: "#1c1c1c",
                      borderRadius: "0px",
                      fontFamily: "Jost, sans-serif",
                      letterSpacing: "1px",
                    },
                  });
                }}
              >
                Ajouter au panier
              </button>
              <button
                className="buyNow"
                onClick={() => {
                  const isProductInBasket = productsInBasket.some(
                    (item) => item.id === product.id
                  );

                  if (!isProductInBasket) {
                    setProductsInBasket([...productsInBasket, product]); // Add only if not in basket
                  }
                  setIsBasketOpen(true);
                }}
              >
                Acheter maintenant
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
