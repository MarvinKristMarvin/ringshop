import "./FilterModal.scss";
import { Product } from "@/types";
import { useStore } from "@/store/useStore";

interface FilterModalProps {
  setIsFilterOpen: (isOpen: boolean) => void;
  products: Product[];
  category: string | string[] | undefined;
}

export default function FilterModal({
  setIsFilterOpen,
  products,
  category,
}: FilterModalProps) {
  const { colorFilters, setColorFilters, stoneFilters, setStoneFilters } =
    useStore();

  const handleStoneFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value, checked } = event.target;

    const updatedFilters = checked
      ? [...stoneFilters, value] // Add the stone if checked
      : stoneFilters.filter((stone) => stone !== value); // Remove if unchecked

    setStoneFilters(updatedFilters); // Pass the new array directly
  };

  const handleResetFilters = () => {
    setStoneFilters([]);
    setColorFilters([]);
  };

  const handleColorFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value, checked } = event.target;

    const updatedFilters = checked
      ? [...colorFilters, value] // Add the color if checked
      : colorFilters.filter((color) => color !== value); // Remove if unchecked

    setColorFilters(updatedFilters); // Pass the new array directly
  };

  const gemstones = Array.from(
    new Set(
      products
        .filter((product) => product.category === category)
        .flatMap((product) => product.gemstones)
    )
  );

  const colors = Array.from(
    new Set(
      products
        .filter((product) => product.category === category)
        .flatMap((product) => product.colors)
    )
  );

  return (
    <div className="FilterModal">
      <div
        className="transparence"
        onClick={() => setIsFilterOpen(false)}
      ></div>
      <div className="menu">
        <header>
          <h2>Filtrer</h2>
          <button onClick={() => setIsFilterOpen(false)}>
            <img src="icons/close.png" alt="" />
          </button>
        </header>
        <section className="filters">
          <h3>{gemstones.length > 0 && "Pierre"}</h3>
          <ul>
            {gemstones.map((stone) => (
              <li key={stone}>
                <label>
                  <input
                    type="checkbox"
                    name="stone"
                    value={stone}
                    checked={stoneFilters.includes(stone)}
                    onChange={handleStoneFilterChange}
                  />
                  {stone.charAt(0).toUpperCase() + stone.slice(1)}
                </label>
              </li>
            ))}
          </ul>

          <h3>{colors.length > 0 && "Couleur"}</h3>
          <ul>
            {colors.map((color) => (
              <li key={color}>
                <label>
                  <input
                    type="checkbox"
                    name="color"
                    value={color}
                    checked={colorFilters.includes(color)}
                    onChange={handleColorFilterChange}
                  />
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </label>
              </li>
            ))}
          </ul>
        </section>

        <div className="buttonDiv">
          <button
            onClick={() => {
              handleResetFilters();
            }}
          >
            Réinitialiser
          </button>
        </div>
      </div>
    </div>
  );
}
