import { useState, useEffect } from "react";
import { getGif } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getGif(category).then((images) => setImages(images));
    setIsLoading(false);
  }, []);

  return {
    images,
    isLoading,
  };
};
