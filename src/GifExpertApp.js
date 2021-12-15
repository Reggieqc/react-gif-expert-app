import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

function GifExpertApp(props) {
  //setCategories tiene un calback con el estado inicial
  const [categories, setCategories] = useState(["One Piece"]);

  //   const handleAdd = () => {
  //     setCategories([...categories, "HunterXhunter"]);
  //     // setCategories(cats => [..cats, 'HunterXHunter]);
  //   };

  return (
    <>
      <h2>Gif Expert</h2>
      {/* mando las referencias de la funcion */}
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {categories.map((category) => (
          // <li key={category}>{category}</li>
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
}

export default GifExpertApp;
