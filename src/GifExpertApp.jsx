import { useState } from "react";
import { AddCategory, GifGrid } from './Components';


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Pokemon"]);

  const onAddCategory = (value) => {
    if (
      categories
        .map((c) => c.toLocaleLowerCase())
        .includes(value.toLocaleLowerCase())
    )
      return;
    setCategories([value, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onAddCategory={(value) => onAddCategory(value)} />
      {categories.map((categorie) => (
        <GifGrid key={categorie} category={categorie} />
      ))}
    </>
  );
};
