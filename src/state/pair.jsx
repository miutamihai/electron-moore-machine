import { Node } from './node'
import { Relation } from './relation'
import { Change } from './change'
import { useState } from 'react'
import { makeRandomString } from '../makeRandomString'
import { RenderIf } from '../renderIf'
import { useContext } from '../context'

export const Pair = () => {
    const [ transitions, setTransitions ] = useState([])
    const [localValue, setLocalValue] = useState('')
    const {setState, state} = useContext()
    const onChange = value => {
        const existing = state[value]
        setLocalValue(value)

        setState({
            ...state,
            [value]: existing
        })
    }

    return <div className={ 'flex space-x-2' }>
        <Node onChange={onChange}/>
        <div className={ 'flex space-y-2 flex-col' }>
            { transitions.map(transition => <Relation key={ transition } parent={ localValue }/>) }
        </div>
        <Change onClick={ () => setTransitions(prev => [ ...prev, makeRandomString() ]) } small>
            +
        </Change>
        <RenderIf condition={ transitions.length }>
            <Change onClick={ () => setTransitions(prev => prev.slice(0, -1)) } small>
                -
            </Change>
        </RenderIf>
    </div>
}