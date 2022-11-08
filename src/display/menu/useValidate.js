import { useCallback } from 'react'

export const useValidate = (setError) => useCallback(event => {
    const {value} = event.target

    if (value.endsWith(',')) {
        setError('Sirul de intrare nu se poate termina cu ","')
    }
}, [ setError ])