//este es un hook 
import { useState } from 'react';


export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({target}) =>{
        //console.log(target);
        const {name, value} = target;
        setFormState({
            ...formState,
            //es lo mismo poner [target.name] : target.value sin desestructurar target
            [name]: value
        })
       // console.log(formState)
    }

    const onResetForm = () => {
        setFormState(initialForm)
    }
    
 


  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  }
}
