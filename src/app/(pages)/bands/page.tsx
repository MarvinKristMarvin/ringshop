import React from "react";
import Article from "@/app/components/Article/Article";
import FilterModal from "@/app/components/FilterModal/FilterModal";
import FixedButtons from "@/app/components/FixedButtons/FixedButtons";
import BasketModal from "@/app/components/BasketModal/BasketModal";

export default function BandsPage() {
  return (
    <main className="BandsPage">
      <FixedButtons />
      <section className="articles">
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </section>
      {/* <FilterModal /> */}
      <BasketModal />
    </main>
  );
}
