import { useState } from "react";

export const useForm = ( initialForm = {} ) => {
  
    const [formstate, setformstate] = useState({initialForm})
    
    const onInputChange = ({target}) => { 
        const {name, value} = target;
        setformstate({
            ...formstate,
            [name]: value,
        })
    }

    const onResetForm = () => { 

        setformstate(initialForm);
        

    };

  
    return {
        ...formstate,
        formstate,
        onInputChange,
        onResetForm
    }
}
