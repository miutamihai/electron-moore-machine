import { Node } from './node'
import { Relation } from './relation'
import { New } from './new'
import { useState } from 'react'

export const Pair = () => {
    const [transitions, setTransitions] = useState([])

    return <div className={ 'flex space-x-2' }>
        <Node/>
        <div className={'flex space-y-2 flex-col'}>
            {transitions.map((transition, index) => <Relation key={index} />)}
        </div>
        <New onClick={ () => setTransitions(prev => [...prev, '']) } small/>
    </div>
}