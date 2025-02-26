import React from "react";
import Link from "next/link";
import "./Article.scss";

export default function Article() {
  return (
    <article className="Article">
      <Link href={"/bands/1"}>
        <div className="imageContainer">
          <img
            src="/bague-zelda-or-jaune-14k-rubis-Emmanuelle-Zysman.webp"
            alt=""
          />
        </div>
        <div className="informationsContainer">
          <h3>Bague Zelda</h3>
          <p>Gold and Ruby</p>
          <span>800&euro;</span>
        </div>
      </Link>
    </article>
  );
}
