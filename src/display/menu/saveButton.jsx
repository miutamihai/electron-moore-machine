import { useDisplayContext } from '../displayContext'
import { useContext } from '../../context'
import { useClearContext } from '../useClearContext'

const className = `
font-mono rounded-full bg-slate-50 text-gray-800 text-lg px-3 
py-1 font-semibold disabled:opacity-60 flex justify-center items-center ml-2
`

export const SaveButton = ({setOpen, input}) => {
    const {setIsAnimating, setCurrent} = useDisplayContext()
    const {setDataSet} = useContext()
    const clearContext = useClearContext()

    const onClick = () => {
        clearContext()
        setCurrent(0)
        setDataSet(input.split(','))
        setIsAnimating(true)
        setOpen(false)
    }

    return <button className={className} onClick={onClick} >
        Salveaza
    </button>
}