import React, { createContext, useContext } from 'react'
import { useBookReducer } from './reducers'

const StoreContext = createContext()
const {Provider} = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useBookReducer({
        book: [],
        currentBook: {}
    })
    return <Provider value={[state,dispatch]}{...props}/>
}

const useStoreContext = () => {
    return useContext(useStoreContext)
}

export { StoreProvider, useStoreContext }