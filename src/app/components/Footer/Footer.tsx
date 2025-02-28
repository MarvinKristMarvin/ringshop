import React from "react";
import "./Footer.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="Footer">
      <h3>Aide et support</h3>
      <nav>
        <ul>
          <li>
            <Link href="/unavailable">Contactez nous</Link>
          </li>
          <li>
            <Link href="/unavailable">Conditions d&apos;utilisation</Link>
          </li>
          <li>
            <Link href="/unavailable">Mentions légales</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
