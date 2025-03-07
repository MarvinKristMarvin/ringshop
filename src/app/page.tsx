import HomeImage from "./components/HomeImage/HomeImage";
import CategoryImage from "./components/CategoryImage/CategoryImage";

export default function Home() {
  return (
    <main className="HomePage">
      <HomeImage />
      <section className="categories">
        <CategoryImage
          categoryName="Anneaux"
          imageUrl="/alliances-Diane-PM-or-jaune-Emmanuelle-Zysman.webp"
          altText=""
          link="bands"
        />
        <CategoryImage
          categoryName="Bagues"
          imageUrl="/bague-zelda-or-jaune-14k-rubis-Emmanuelle-Zysman.webp"
          altText=""
          link="rings"
        />
        <CategoryImage
          categoryName="Colliers"
          imageUrl="/collier-Baby-Amor-PM-or-jaune-diamant-emmanuelle-zysmancopiecopie2.jpg"
          altText=""
          link="necklaces"
        />
        <CategoryImage
          categoryName="Bracelets"
          imageUrl="/bracelet-true-love-or-jaune.webp"
          altText=""
          link="bracelets"
        />
      </section>
    </main>
  );
}
