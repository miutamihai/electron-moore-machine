import { createContext, useContext as useReactContext, useState } from 'react'
import { stages } from './stages'

export const Context = createContext({})

export const useContext = () => useReactContext(Context)

export const useDefaultContext = () => {
    const [state, setState] = useState({})
    const [input, setInput] = useState('')
    const [file, setFile] = useState({name: '', data: ''})
    const [errors, setErrors] = useState({filePicker: null, input: null, state: null})
    const [stage, setStage] = useState(stages.setup)

    return {
        state,
        setState,
        input,
        setInput,
        file,
        setFile,
        errors,
        setErrors,
        stage,
        setStage,
    }
}
