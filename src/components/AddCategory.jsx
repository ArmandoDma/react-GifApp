import { useState } from "react";


export const AddCategory = ({onNewCategory}) => {

    const [InputValue, setInputValue] = useState('');

    const InpChange = ({target}) => {        
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(InputValue.trim().length <= 1) return;        

        //setCategorias( Categorias => [InputValue, ...Categorias]);
        onNewCategory(InputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>            
            <input type="text" 
            placeholder="Search Gifs" 
            value={InputValue} 
            onChange={InpChange}/>
        </form>
    )
}
