import { useContext } from '../context'
import { useCallback } from 'react'
import {isEmpty} from 'lodash'

const emptyMessage = 'Tabelul de stari trebuie sa contina cel putin un nod comis'

const notCommittedMessage = 'Toate modificarile din tabelul de stari trebuiesc comise'

export const useValidateState = () => {
    const {setErrors, state} = useContext()

    return useCallback((onSuccess = () => {console.log('clicked')}) => {
        const container = document.getElementById("stateContainer")
        const inputs = Array.from(container.querySelectorAll("input"))
        const notAllCommitted = inputs.some(input => !input.disabled)

        if (isEmpty(state)) {
            setErrors(prev => ({...prev, state: emptyMessage}))
        } else if (notAllCommitted) {
            setErrors(prev => ({...prev, state: notCommittedMessage}))
        } else {
            onSuccess()
        }
    }, [setErrors, state])
}