import { useState } from 'react'
import {Pair} from './pair'

export const State = () => {
    const [state, setState] = useState([])

    return <div className={'flex flex-col space-y-2 w-1/2'}>
        {state.map((value, index) => <Pair key={index} />)}
        <button onClick={() => setState(prev => [...prev, ''])} className={'bg-slate-50 text-gray-800 rounded-full text-xl w-full py-2'}>+</button>
    </div>
}