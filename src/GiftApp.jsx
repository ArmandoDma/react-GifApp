import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GiftApp = () => {
    const [Categorias, setCategorias] = useState(['']);
    
    const onAddCategory = (newCategory) => {
        if(Categorias.includes(newCategory)) return;
        //Categorias.push(newCategory);    

        setCategorias([newCategory,...Categorias]);
        //setCategorias(cat => [...cat, 'Conejos']);
    }    

    return (
        <>
            {/*Title */}
            <h1>GiftExpertApp</h1>   

            {/*Input */}             
            <AddCategory 
            //setCategorias={setCategorias}
            onNewCategory={event => onAddCategory(event)}
            currentCategorias={Categorias}
            />

            {/*Listado de cate */}
            {Categorias.map((cate) => 
                    (
                        <GifGrid key={cate} cate={cate}/>
                    )
                )}            
        </>
  )
}
