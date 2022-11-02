import { useState } from 'react'
import { Pair } from './pair'
import { New } from './new'

export const State = () => {
    const [ state, setState ] = useState([])

    return <div className={ 'flex flex-col space-y-2 w-3/4' }>
        { state.map((value, index) => <Pair key={ index }/>) }
        <New onClick={ () => setState(prev => [ ...prev, '' ]) }/>
    </div>
}