import { createContext, useContext as useReactContext, useState } from 'react'

export const DisplayContext = createContext({})

export const useDisplayContext = () => useReactContext(DisplayContext)

export const useDefaultDisplayContext = () => {
    const [network, setNetwork] = useState({})
    const [isAnimating, setIsAnimating] = useState(false)
    const [log, setLog] = useState([])

    return {
        network,
        setNetwork,
        isAnimating,
        setIsAnimating,
        log,
        setLog
    }
}
