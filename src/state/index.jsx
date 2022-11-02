import { useState } from 'react'
import { Pair } from './pair'
import { Change } from './change'
import { makeRandomString } from '../makeRandomString'
import { RenderIf } from '../renderIf'

export const State = () => {
    const [ state, setState ] = useState([])

    return <div className={ 'flex flex-col space-y-2 w-3/4' }>
        { state.map(value => <Pair key={ value } value={ value }/>) }
        <Change onClick={ () => setState(prev => [ ...prev, makeRandomString() ]) }>
            +
        </Change>
        <RenderIf condition={ state.length }>
            <Change onClick={ () => setState(prev => prev.slice(0, -1)) }>
                -
            </Change>
        </RenderIf>
    </div>
}