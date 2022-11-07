import { createContext, useContext as useReactContext, useState } from 'react'

export const Context = createContext({})

export const useContext = () => useReactContext(Context)

export const useDefaultContext = () => {
    const [state, setState] = useState({})
    const [input, setInput] = useState('')
    const [file, setFile] = useState({name: '', data: ''})
    const [errors, setErrors] = useState({filePicker: null, input: null})

    return {
        state, setState, input, setInput, file, setFile, errors, setErrors
    }
}
