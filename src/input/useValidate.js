import {useContext} from '../context'
import { useCallback } from 'react'

export const useValidate = () => {
    const {setErrors} = useContext()

    return useCallback(event => {
        const {value} = event.target

        if (value.endsWith(',')) {
            setErrors(prev => ({...prev, input: 'Sirul de intrare nu se poate termina cu ","'}))
        }
    }, [setErrors])
}