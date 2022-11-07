import { useState } from 'react'
import { Pair } from './pair'
import { Change } from './change'
import { makeRandomString } from '../makeRandomString'
import { RenderIf } from '../renderIf'

const scrollBarClasses = 'scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full hover:scrollbar-thumb-slate-50'

export const State = () => {
    const [ state, setState ] = useState([])

    return <div className={ `flex flex-col space-y-2 p-4 w-3/4 overflow-auto ${scrollBarClasses}` }>
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