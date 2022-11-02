import { useState } from 'react'
import { Node } from './node'
import { useContext } from '../context'

const className = 'placeholder:italic placeholder:text-slate-50 placeholder:text-center placeholder:font-mono placeholder:text-xs bg-gray-800 w-full py-2 pl-9 pr-3 shadow-sm border-b-2 border-slate-50 focus:outline-none focus:border-sky-500 text-slate-50 text-md font-mono'

export const Relation = ({parent}) => {
    const [value, setValue] = useState('')
    const {state, setState} = useContext()

    const onChange = value => {
        setState({
            ...state,
            [parent]: value
        })
    }

    return <div className={'flex space-x-1'}>
        <input value={value} placeholder={'Tranzitie noua...'} onChange={event => setValue(event.target.value)} className={className} />
        <Node onChange={onChange} />
    </div>
}