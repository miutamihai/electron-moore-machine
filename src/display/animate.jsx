import { useDisplayContext } from './displayContext'
import { useClearContext } from './useClearContext'

const className = `
font-mono rounded-full bg-slate-50 text-gray-800 text-lg px-3 
py-1 font-semibold disabled:opacity-60 absolute top-4 z-10
`

export const Animate = () => {
    const {isAnimating, setIsAnimating} = useDisplayContext()
    const clearContext = useClearContext()

    const onClick = () => {
        clearContext()
        setIsAnimating(true)
    }

    return <button className={className} onClick={onClick} disabled={isAnimating}>
        Ruleaza
    </button>
}