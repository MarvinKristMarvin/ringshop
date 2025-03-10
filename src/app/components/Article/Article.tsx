import React from "react";
import Link from "next/link";
import "./Article.scss";

import { Product } from "@/types";

interface ArticleProps {
  product: Product;
}

export default function Article({ product }: ArticleProps) {
  return (
    <article className="Article">
      <Link href={`/${product.category}/${product.id}`}>
        <div className="imageContainer">
          <img
            src={`/${product.category}/${product.image}.${product.format}`}
            alt=""
          />
        </div>
        <div className="informationsContainer">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <span>{product.price} &euro;</span>
        </div>
      </Link>
    </article>
  );
}
