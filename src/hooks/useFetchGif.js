import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGif = (cate) => {

     const [Images, setImages] = useState([]);
     const [isLoading, setIsLoading] = useState(true);

     const getImages = async() => {
       const newImages = await getGifs(cate);
       setImages(newImages);
       setIsLoading(false);
     }

     useEffect(() => {

         getImages();
        
     }, [])

  return {
    Images,
    isLoading
  }
  
}
