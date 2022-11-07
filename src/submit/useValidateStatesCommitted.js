import { useContext } from '../context'
import { useCallback } from 'react'

const errorMessage = 'Toate modificarile din tabelul de stari trebuiesc comise'

export const useValidateStatesCommitted = () => {
    const {setErrors} = useContext()

    return useCallback((onSuccess = () => {console.log('clicked')}) => {
        const container = document.getElementById("stateContainer")
        const inputs = Array.from(container.querySelectorAll("input"))
        const notAllCommitted = inputs.some(input => !input.disabled)

        if (notAllCommitted) {
            setErrors(prev => ({...prev, state: errorMessage}))
        } else {
            onSuccess()
        }
    }, [setErrors])
}