
import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";

export const GifGrid = ({cate}) => {

  const {Images, isLoading} = useFetchGif(cate);

  
  return (
    <>
        <h2>{cate}</h2>    
        {
          isLoading && (<h4>Cargando...</h4>)
        }

        <ol className="card-gif"> 
          {
          Images.map((image) => (
            <GifItem 
            key={image.id}
            {...image}
            />
          ))
          }
          
        </ol>   
    </>
  )
}
