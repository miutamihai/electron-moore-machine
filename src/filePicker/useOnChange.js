import {useContext} from '../context'
import { useCallback } from 'react'
import {readFile} from './readFile'

export const useOnChange = () => {
    const {setFile, setErrors} = useContext()

    return useCallback(event => {
        readFile(event.target.files[0])
            .then(({name, data}) => {
                setErrors(prev => ({...prev, filePicker: null}))
                setFile({name, data})
            })
            .catch(error => {
                setErrors(prev => ({...prev, filePicker: error}))
            })
    }, [setFile, setErrors])
}