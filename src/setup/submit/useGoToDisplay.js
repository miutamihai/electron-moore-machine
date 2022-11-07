import { useContext } from '../../context'
import { useCallback } from 'react'
import { stages } from '../../stages'

export const useGoToDisplay = () => {
    const {setStage, state, input, file: {data}, setDataSet} = useContext()

    return useCallback(() => {
        let dataSet
        if (input) {
            dataSet = input.split(',')
        } else {
            dataSet = data.split(',')
        }
        setDataSet(dataSet)
        setStage(stages.display)
    }, [setStage, state, input, data, setDataSet])
}