import { useEffect, useState } from 'react'
import { Node } from './node'
import { useContext } from '../../context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { RenderIf } from '../../renderIf'
import { get } from 'lodash'

const className = 'placeholder:italic placeholder:text-slate-50 placeholder:text-center placeholder:font-mono placeholder:text-xs bg-gray-800 w-full py-2 pl-9 pr-3 shadow-sm border-b-2 border-slate-50 focus:outline-none focus:border-sky-500 text-slate-50 text-md font-mono disabled:opacity-60'

const makeIconWrapperClassName = disabled => {
    const initialClassName = 'flex max-h-full justify-center align-center absolute top-1.5 right-0'

    return !disabled ? initialClassName : `${ initialClassName } opacity-60 pointer-events-none`
}

const errorClassName = 'border-2 border-rose-500 rounded-lg flex flex-col'

export const Relation = ({parent}) => {
    const [ value, setValue ] = useState('')
    const [ committedValue, setCommittedValue ] = useState('')
    const {state, setState} = useContext()
    const [ disabled, setDisabled ] = useState(false)
    const [ nodeValue, setNodeValue ] = useState('')
    const [ error, setError ] = useState(false)

    useEffect(() => {
        if (nodeValue && committedValue) {
            const parentValue = get(state, parent, [])
            setState({
                ...state,
                [parent]: [ ...parentValue, [ committedValue, nodeValue ] ]
            })
        }
    }, [ nodeValue, committedValue, setState ])

    const onChange = value => {
        setNodeValue(value)
    }

    const onTransitionChange = event => {
        setError(false)
        setValue(event.target.value)
    }

    const onTransitionDone = () => {
        if (value.match(/([A-Z]+)\-([A-Z]+)\[([0-9]+)\]+/)) {
            setDisabled(true)
            setCommittedValue(value)
        } else {
            setError(true)
        }
    }

    return <div className={ 'flex space-x-1' }>
        <div style={ {position: 'relative'} } { ...error ? {className: errorClassName} : {} }>
            <input value={ value } placeholder={ 'Tranzitie noua...' } onChange={ onTransitionChange }
                   className={ className } disabled={ disabled }/>
            <RenderIf condition={ value }>
                <div className={ makeIconWrapperClassName(disabled) }>
                    <FontAwesomeIcon onClick={ onTransitionDone } icon={ faCheck }
                                     className={ 'bg-slate-50 text-gray-800 rounded-full text-md h-6 w-6 mr-2 cursor-pointer' }/>
                </div>
            </RenderIf>
            <RenderIf condition={ error }>
                <span className={ 'text-rose-500 font-mono' }>
                    Relatiile trebuie sa fie de forma A-B[1]
                </span>
            </RenderIf>
        </div>
        <Node onChange={ onChange } regex={ /([A-Z]+)+/ } validationMessage={ 'Sunt permise doar litere mari' }/>
    </div>
}