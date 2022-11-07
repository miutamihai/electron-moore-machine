import { useContext } from '../context'
import { useCallback } from 'react'

export const useOnChange = () => {
    const {setInput, setErrors} = useContext()

    return useCallback(event => {
        setErrors(prev => ({...prev, input: null}))
        setInput(
            event.target.value
                .replace(/[^\d,-]/g, '')
                .replace(/(,)\1+/g, '$1')
        )
    }, [ setInput ])
}
