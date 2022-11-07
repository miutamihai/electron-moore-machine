import { useEffect } from 'react'
import { useDisplayContext } from '../displayContext'
import { useContext } from '../../context'

const delay = (delayInms) => new Promise(resolve => setTimeout(resolve, delayInms))

export const AnimationBehaviour = () => {
    const {isAnimating, setIsAnimating, network, setLog} = useDisplayContext()
    const {state} = useContext()

    useEffect(() => {
        const runAnimation = async () => {
            if (isAnimating) {
                for (const entry of Object.keys(state)) {
                    const value = entry.split('[')[0]
                    setLog(prev => [...prev, `Current node is ${value}`])
                    network.setSelection({nodes: [value]})
                    await delay(1000)
                }

                setIsAnimating(false)
            }
        }

        runAnimation()
    }, [isAnimating, state])

    return ''
}