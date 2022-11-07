import { useContext } from '../context'
import { useCallback } from 'react'
import { stages } from '../stages'
import { useDisplayContext } from './displayContext'

export const useGoBack = () => {
    const {setStage, setInput, setFile, setErrors, setState} = useContext()
    const {setNetwork, setIsAnimating, setLog} = useDisplayContext()

    return useCallback(() => {
        setStage(stages.setup)
        setInput('')
        setFile({name: '', data: ''})
        setErrors({filePicker: null, input: null, state: null})
        setState({})
        setNetwork({})
        setIsAnimating(false)
        setLog([])
    }, [setStage, setInput, setFile, setErrors, setState, setNetwork, setIsAnimating, setLog])
}