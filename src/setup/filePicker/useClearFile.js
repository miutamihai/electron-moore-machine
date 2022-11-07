import {useContext} from '../../context'
import { useCallback } from 'react'

export const useClearFile = () => {
    const {setFile} = useContext()

    return useCallback(() => {
        setFile({name: '', data: ''})
        document.getElementById('filepicker').value = ''
    }, [setFile])
}