import React from "react";
import "./FilterModal.scss";
export default function FilterModal() {
  return (
    <div className="FilterModal">
      <div className="transparence"></div>
      <div className="menu">
        <h2>Filtres</h2>

        <h3>Pierre</h3>
        <ul>
          <li>
            <label>
              <input type="checkbox" name="pierre" value="Diamant" />
              Diamant
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="pierre" value="Rubis" />
              Rubis
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="pierre" value="Emeraude" />
              Emeraude
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="pierre" value="Tourmaline" />
              Tourmaline
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="pierre" value="Corail" />
              Corail
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="pierre" value="Turquoise" />
              Turquoise
            </label>
          </li>
        </ul>

        <h3>Couleur</h3>
        <ul>
          <li>
            <label>
              <input type="checkbox" name="couleur" value="Rouge" />
              Rouge
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="couleur" value="Vert" />
              Vert
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="couleur" value="Bleu" />
              Bleu
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="couleur" value="Rose" />
              Rose
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="couleur" value="Jaune" />
              Jaune
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="couleur" value="Blanc" />
              Blanc
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="couleur" value="Aucune" />
              Aucune
            </label>
          </li>
        </ul>

        <div className="buttonDiv">
          <button>Appliquer</button>
        </div>
      </div>
    </div>
  );
}
