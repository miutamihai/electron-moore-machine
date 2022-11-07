import { useContext } from '../context'
import { useCallback } from 'react'
import { stages } from '../stages'

export const useGoBack = () => {
    const {setStage, setInput, setFile, setErrors, setState} = useContext()

    return useCallback(() => {
        setStage(stages.setup)
        setInput('')
        setFile({name: '', data: ''})
        setErrors({filePicker: null, input: null, state: null})
        setState({})
    }, [setStage, setInput, setFile, setErrors, setState])
}