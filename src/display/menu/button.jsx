import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDisplayContext } from '../displayContext'

const className = `
font-mono rounded-full bg-slate-50 text-gray-800 text-lg px-3 
py-1 font-semibold disabled:opacity-60 flex justify-center items-center
`

export const Button = ({open, setOpen}) => {
    const {isAnimating} = useDisplayContext()

    return <button className={ className } disabled={isAnimating} onClick={ () => setOpen(!open) }>
        Meniu
        <FontAwesomeIcon icon={ open ? faChevronUp : faChevronDown }
                         className={ 'bg-slate-50 text-gray-800 rounded-full text-md h-6 w-6 ml-2' }/>
    </button>
}
