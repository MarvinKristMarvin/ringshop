"use client";

import React, { use } from "react";
import Article from "@/app/components/Article/Article";
import FilterModal from "@/app/components/FilterModal/FilterModal";
import FixedButtons from "@/app/components/FixedButtons/FixedButtons";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useStore } from "@/store/useStore";

import { Product } from "@/types";

export default function BandsPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const params = useParams();
  const category = params.category;
  const { stoneFilters, colorFilters } = useStore();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    console.log("products:", products);
  }, [products]);

  // Change filteredProducts when stoneFilters or colorFilters change
  useEffect(() => {
    const lowercasedStoneFilters = stoneFilters.map((stone) =>
      stone.toLowerCase()
    );
    const lowercasedColorFilters = colorFilters.map((color) =>
      color.toLowerCase()
    );

    const filteredProducts: Product[] = products.filter((product) => {
      const hasStone = product.gemstones.some((stone) =>
        lowercasedStoneFilters.includes(stone.toLowerCase())
      );
      const hasColor = product.colors.some((color) =>
        lowercasedColorFilters.includes(color.toLowerCase())
      );

      if (
        lowercasedStoneFilters.length > 0 &&
        lowercasedColorFilters.length > 0
      ) {
        return hasStone && hasColor; // Match both stone and color
      } else if (lowercasedStoneFilters.length > 0) {
        return hasStone; // Match only stone
      } else if (lowercasedColorFilters.length > 0) {
        return hasColor; // Match only color
      }
      return true; // No filters applied, return all products
    });

    setFilteredProducts(filteredProducts);
  }, [stoneFilters, colorFilters, products]);

  return (
    <main className="BandsPage">
      <FixedButtons setIsFilterOpen={setIsFilterOpen} />
      <section className="articles">
        {filteredProducts.map(
          (product) =>
            product.category === category && (
              <Article key={product.id} product={product} />
            )
        )}
      </section>
      {isFilterOpen && (
        <FilterModal
          setIsFilterOpen={setIsFilterOpen}
          products={products}
          category={category}
        />
      )}
    </main>
  );
}
