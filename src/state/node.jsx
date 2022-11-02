import { useState } from 'react'
import InputChildren from 'react-input-children'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import { RenderIf } from '../renderIf'

const className  = 'placeholder:italic placeholder:text-slate-50 placeholder:text-center placeholder:font-mono placeholder:text-md bg-gray-800 max-w-3/4 max-h-12 border border-slate-50 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-slate-50 text-md font-mono disabled:opacity-60 relative'

const makeIconWrapperClassName = disabled => {
   const initialClassName = 'flex max-h-full justify-center align-center absolute top-1.5 right-0'

    return !disabled ? initialClassName : `${initialClassName} opacity-60 pointer-events-none`
}

export const Node = ({onChange}) => {
    const [value, setValue] = useState('')
    const [disabled, setDisabled] = useState(false)

    const localOnChange = event => {
        setValue(event.target.value)
    }

    const globalOnChange = () => {
        onChange(value)
        setDisabled(true)
    }

    return <div style={{position: 'relative'}}>
        <input value={ value } placeholder={ 'Stare noua...' } onChange={ localOnChange } className={ className } disabled={ disabled } />
        <RenderIf condition={value}>
            <div className={makeIconWrapperClassName(disabled)}>
                <FontAwesomeIcon onClick={globalOnChange} icon={faCheck} className={'bg-slate-50 text-gray-800 rounded-full text-md h-6 w-6 mr-2 cursor-pointer'}/>
            </div>
        </RenderIf>
    </div>
}