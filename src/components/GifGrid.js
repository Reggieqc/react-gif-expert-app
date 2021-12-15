import React, { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  //   const [images, setImages] = useState([]);
  const { data: images, loading } = useFetchGifs(category);

  //   useEffect(() => {
  //     getGifs(category).then(setImages);
  //     //Para evitar que se llame al endpoint cada vez que se renderiza el componente ya sea porque muto el state u otra cosa
  //   }, [category]);

  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Loading</p>}

      {/* <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img}></GifGridItem>
        ))}
      </div> */}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img}></GifGridItem>
        ))}
      </div>
    </>
  );
};
