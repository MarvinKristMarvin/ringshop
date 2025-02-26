import React from "react";
import "./CategoryImage.scss";

interface CategoryImageProps {
  categoryName: string;
  imageUrl: string;
  altText: string;
  link: string;
}

export default function CategoryImage({
  imageUrl,
  altText,
  categoryName,
  link,
}: CategoryImageProps) {
  return (
    <a className="CategoryImage" href={link}>
      <img src={imageUrl} alt={altText} />
      <span>{categoryName}</span>
    </a>
  );
}
