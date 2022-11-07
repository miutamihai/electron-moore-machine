import { useContext } from '../context'
import { useCallback } from 'react'

export const useOnChange = () => {
    const {setInput} = useContext()

    return useCallback(event => {
        setInput(event.target.value)
    }, [ setInput ])
}
