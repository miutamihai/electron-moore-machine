import { DisplayContext, useDefaultDisplayContext } from './displayContext'
import { Container } from './container'
import { Animate } from './animate'
import { Graph } from './graph'
import { Button } from './button'
import { Log } from './log'
import { AnimationBehaviour } from './animationBehaviour'

export const Display = () => <Container>
    <DisplayContext.Provider value={ useDefaultDisplayContext() }>
        <Animate/>
        <Log/>
        <Graph/>
        <Button/>
        <AnimationBehaviour/>
    </DisplayContext.Provider>
</Container>