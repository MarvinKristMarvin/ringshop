"use client";

import React from "react";
import Article from "@/app/components/Article/Article";
import FilterModal from "@/app/components/FilterModal/FilterModal";
import FixedButtons from "@/app/components/FixedButtons/FixedButtons";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { Product } from "@/types";

export default function BandsPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const params = useParams();
  const category = params.category;

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <main className="BandsPage">
      <FixedButtons setIsFilterOpen={setIsFilterOpen} />
      <section className="articles">
        {products.map(
          (product) =>
            product.category === category && (
              <Article key={product.id} product={product} />
            )
        )}
      </section>
      {isFilterOpen && <FilterModal setIsFilterOpen={setIsFilterOpen} />}
    </main>
  );
}
