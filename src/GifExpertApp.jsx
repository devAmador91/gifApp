import { useState } from "react";
import { AddCategory, GifGrid } from './Components';


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["pokemon"]);

  const onNewCategory = (value) => {
    if (
      categories
        .map((c) => c.toLocaleLowerCase())
        .includes(value.toLocaleLowerCase())
    )
      return;
    setCategories([value.toLocaleLowerCase(), ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={(value) => onNewCategory(value)} />
      {categories.map((categorie) => (
        <GifGrid key={categorie} category={categorie} />
      ))}
    </>
  );
};
