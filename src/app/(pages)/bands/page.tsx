"use client";

import React from "react";
import Article from "@/app/components/Article/Article";
import FilterModal from "@/app/components/FilterModal/FilterModal";
import FixedButtons from "@/app/components/FixedButtons/FixedButtons";
import { useEffect, useState } from "react";

import { Product } from "@/types";

export default function BandsPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/data/products.json") // Charger depuis `public/data/`
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <main className="BandsPage">
      <FixedButtons setIsFilterOpen={setIsFilterOpen} />
      <section className="articles">
        {products.map((product) => (
          <Article key={product.id} product={product} />
        ))}
      </section>
      {isFilterOpen && <FilterModal setIsFilterOpen={setIsFilterOpen} />}
    </main>
  );
}
