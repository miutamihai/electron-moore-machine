import { useDisplayContext } from './displayContext'
import {useCallback} from 'react'
import {isEmpty} from 'lodash'

export const useSetNetwork = () => {
    const {network, setNetwork} = useDisplayContext()

    return useCallback(networkInstance => {
        if (isEmpty(network)) {
            setNetwork(networkInstance)
        }
    }, [network, setNetwork])
}