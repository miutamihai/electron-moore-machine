import { useEffect } from 'react'
import { useDisplayContext } from '../displayContext'
import { useContext } from '../../context'

const delay = (delayInms) => new Promise(resolve => setTimeout(resolve, delayInms))

export const AnimationBehaviour = () => {
    const {isAnimating, setIsAnimating, network, setLog, setCurrent, current} = useDisplayContext()
    const {state, dataSet} = useContext()

    useEffect(() => {
        const runAnimation = async () => {
            if (isAnimating) {
                const entries = Object.entries(state)

                for (const dataEntry of dataSet) {
                    try {
                        setLog(prev => [...prev, {message: `Se citeste valoarea: ${dataEntry}`, type: 'log'}])
                        const currentState = entries[current]

                        if (!currentState[1]) {
                            break
                        }
                        const [transition, targetState] = currentState[1]
                            .find(([value]) => value.includes(dataEntry))
                        setLog(prev => [...prev, {message: `Se aplica tranzitia: ${transition}`, type: 'log'}])
                        network.setSelection({edges: [transition]}, {unselectAll: true, highlightEdges: false})
                        await delay(1000)
                        const newState = entries.find(([key]) => key.includes(targetState))
                        setCurrent(entries.indexOf(newState))
                        setLog(prev => [...prev, {message: `Se printeaza valoarea: ${newState[0].split('[')[1].split(']')[0]}`, type: 'output'}])
                        network.setSelection({nodes: [newState[0].split('[')[0]]}, {unselectAll: true, highlightEdges: false})
                        await delay(1000)
                    } catch(e) {
                        setLog(prev => [...prev, {message: `Eroare: ${e}`, type: 'error'}])
                        break
                    }
                }

                setLog(prev => [...prev, {message: 'Program incheiat', type: 'output'}])
                setIsAnimating(false)
            }
        }

        runAnimation()
    }, [isAnimating])

    return ''
}