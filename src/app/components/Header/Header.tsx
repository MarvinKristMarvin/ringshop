"use client";

import React from "react";
import "./Header.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="Header">
      <Link href="/">
        <h1>Marvin&apos;s Gold Jewelry</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link
              href="/bands"
              className={pathname === "/bands" ? "active" : ""}
            >
              Anneaux
            </Link>
          </li>
          <li>
            <Link
              href="/rings"
              className={pathname === "/rings" ? "active" : ""}
            >
              Bagues
            </Link>
          </li>
          <li>
            <Link
              href="/necklaces"
              className={pathname === "/necklaces" ? "active" : ""}
            >
              Colliers
            </Link>
          </li>
          <li>
            <Link
              href="/bracelets"
              className={pathname === "/bracelets" ? "active" : ""}
            >
              Bracelets
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
