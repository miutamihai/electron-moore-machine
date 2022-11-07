import { useDisplayContext } from './displayContext'
import { useCallback } from 'react'

export const useClearContext = () => {
    const {setLog, network, setCurrent} = useDisplayContext()

    return useCallback(() => {
        setLog([])
        setCurrent('')
        network.unselectAll()
    }, [network, setLog, setCurrent])
}