import { useState } from 'react'
import {useContext} from '../../context'
import { Pair } from './pair'
import { Change } from './change'
import { makeRandomString } from './makeRandomString'
import { RenderIf } from '../../renderIf'

const scrollBarClasses = 'scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full hover:scrollbar-thumb-slate-50'

const className = `flex flex-col space-y-2 p-4 w-3/4 overflow-auto ${scrollBarClasses}`

const errorClasses = 'border-2 border-rose-500 rounded-lg'

const makeClassName = error => error ? `${ className } ${ errorClasses }` : className

export const State = () => {
    const [ state, setState ] = useState([])
    const {errors: {state: stateErrors}, setErrors} = useContext()

    const onContainerClick = () => {
        setErrors(prev => ({...prev, state: null}))
    }

    return <>
        <div id={'stateContainer'} className={ makeClassName(stateErrors) } onClick={onContainerClick}>
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
        <RenderIf condition={ !!stateErrors }>
            <span className={ 'text-rose-500 font-mono' }>
            { stateErrors }
            </span>
        </RenderIf>
    </>
}