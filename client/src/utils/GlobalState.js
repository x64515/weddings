import React, { createContext, useContext } from 'react'
import { useWeddingReducer } from './reducers'

const StoreContext = createContext();
const {Provider} = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useWeddingReducer({
            wedding: {},
            
    })
    return <Provider value={[state,dispatch]}{...props}/>
}

const useStoreContext = () => {
    return useContext(StoreContext);
}

export { StoreProvider, useStoreContext }