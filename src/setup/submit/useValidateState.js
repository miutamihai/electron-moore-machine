import { useContext } from '../../context'
import { useCallback } from 'react'
import { isEmpty } from 'lodash'

const emptyMessage = 'Tabelul de stari trebuie sa contina cel putin un nod comis'

const notCommittedMessage = 'Toate modificarile din tabelul de stari trebuiesc comise'

const duplicateTransitionsMessage = 'Tabelul de stari contine tranzitii duplicate'

const targetNodesMissingMessage = 'Nu toate tranzitiile se termina in noduri existente'

function checkIfDuplicateExists(arr) {
    return new Set(arr).size !== arr.length
}

const duplicateTransitionsExist = state => {
    const transitions = Object.values(state)
        .filter(values => !!values)
        .map(([ transition ]) => transition)

    if (!transitions.length) {
        return false
    }

    return checkIfDuplicateExists(transitions)
}

const targetNodesMissing = state => {
    const nodes = Object.keys(state)
    const targets = Object.values(state)
        .filter(values => !!values)
        .map(([ _, target ]) => target)

    if (!targets.length) {
        return false
    }

    return targets.some(target => !nodes.find(node => node.includes(target)))
}

export const useValidateState = () => {
    const {setErrors, state} = useContext()

    return useCallback((onSuccess = () => {
        console.log('clicked')
    }) => {
        const container = document.getElementById('stateContainer')
        const inputs = Array.from(container.querySelectorAll('input'))
        const notAllCommitted = inputs.some(input => !input.disabled)

        if (isEmpty(state)) {
            setErrors(prev => ({...prev, state: emptyMessage}))
        } else if (notAllCommitted) {
            setErrors(prev => ({...prev, state: notCommittedMessage}))
        } else if (duplicateTransitionsExist(state)) {
            setErrors(prev => ({...prev, state: duplicateTransitionsMessage}))
        } else if (targetNodesMissing(state)) {
            setErrors(prev => ({...prev, state: targetNodesMissingMessage}))
        } else {
            onSuccess()
        }
    }, [ setErrors, state ])
}