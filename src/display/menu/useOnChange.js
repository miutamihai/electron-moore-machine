import { useCallback } from 'react'

export const useOnChange = (setInput, setError) => useCallback(event => {
    setError('')
    setInput(
        event.target.value
            .replace(/[^\d,-]/g, '')
            .replace(/(,)\1+/g, '$1')
    )
}, [ setInput, setError ])
