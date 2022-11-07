import { useContext } from '../../context'
import { useCallback } from 'react'
import { stages } from '../../stages'

export const useGoToDisplay = () => {
    const {setStage, state} = useContext()

    return useCallback(() => {
        console.log('going to display with state', state)
        setStage(stages.display)
    }, [setStage, state])
}