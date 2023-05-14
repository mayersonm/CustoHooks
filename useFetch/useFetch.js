import { useEffect, useState } from 'react'

export const useFetch = ( url ) => {

    const [state, setstate] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

    const getFecth = async () => {

        setstate({
            ...setstate,
            isLoading: true,
        });

        const resp = await fetch( url );
        const data = await resp.json();

        setstate({
            data,
            isLoading: false,
            hasError: null,
        });

    }

    useEffect(() => { 

        getFecth();


    },[ url ])

  return {
    data:       state.data,
    isLoading:  state.isLoading,
    hasError:   state.hasError
  };
}
