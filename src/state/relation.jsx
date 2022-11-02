import { useState } from 'react'
import { Node } from './node'
import { useContext } from '../context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import { RenderIf } from '../renderIf'

const className = 'placeholder:italic placeholder:text-slate-50 placeholder:text-center placeholder:font-mono placeholder:text-xs bg-gray-800 w-full py-2 pl-9 pr-3 shadow-sm border-b-2 border-slate-50 focus:outline-none focus:border-sky-500 text-slate-50 text-md font-mono disabled:opacity-60'

const makeIconWrapperClassName = disabled => {
    const initialClassName = 'flex max-h-full justify-center align-center absolute top-1.5 right-0'

    return !disabled ? initialClassName : `${initialClassName} opacity-60 pointer-events-none`
}

export const Relation = ({parent}) => {
    const [value, setValue] = useState('')
    const {state, setState} = useContext()
    const [disabled, setDisabled] = useState(false)

    const onChange = value => {
        setState({
            ...state,
            [parent]: value
        })
    }

    const onTransitionDone = event => {
        setDisabled(true)
    }

    return <div className={'flex space-x-1'}>
        <div style={{position: 'relative'}}>
            <input value={value} placeholder={'Tranzitie noua...'} onChange={event => setValue(event.target.value)} className={className} disabled={disabled} />
            <RenderIf condition={value}>
                <div className={makeIconWrapperClassName(disabled)}>
                    <FontAwesomeIcon onClick={onTransitionDone} icon={faCheck} className={'bg-slate-50 text-gray-800 rounded-full text-md h-6 w-6 mr-2 cursor-pointer'}/>
                </div>
            </RenderIf>
        </div>
        <Node onChange={onChange} />
    </div>
}