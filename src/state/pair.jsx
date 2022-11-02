import { Node } from './node'
import { Relation } from './relation'
import { Change } from './change'
import { useState } from 'react'
import { makeRandomString } from '../makeRandomString'
import { RenderIf } from '../renderIf'

export const Pair = ({value}) => {
    const [ transitions, setTransitions ] = useState([])

    return <div className={ 'flex space-x-2' }>
        <Node/>
        <div className={ 'flex space-y-2 flex-col' }>
            { transitions.map(transition => <Relation key={ transition } value={ transition }/>) }
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