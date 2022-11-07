import { createContext, useContext as useReactContext, useState } from 'react'

export const Context = createContext({})

export const useContext = () => useReactContext(Context)

export const useDefaultContext = () => {
    const [state, setState] = useState({})
    const [input, setInput] = useState('')

    return {
        state, setState, input, setInput
    }
}
