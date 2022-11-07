import { useDisplayContext } from './displayContext'
import { useCallback } from 'react'

export const useClearContext = () => {
    const {setLog, network} = useDisplayContext()

    return useCallback(() => {
        setLog([])
        network.unselectAll()
    }, [network, setLog])
}