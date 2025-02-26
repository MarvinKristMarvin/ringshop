import React from "react";
import Article from "@/app/components/Article/Article";
import FilterModal from "@/app/components/FilterModal/FilterModal";

export default function BandsPage() {
  return (
    <main className="BandsPage">
      {/* <h2>ANNEAUX</h2> */}
      <section className="buttons">
        <button>FILTRER</button>
        <button>PANIER</button>
      </section>
      <section className="articles">
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </section>
      <FilterModal />
    </main>
  );
}
