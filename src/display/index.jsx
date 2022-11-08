import { DisplayContext, useDefaultDisplayContext } from './displayContext'
import { Container } from './container'
import { Animate } from './animate'
import { Graph } from './graph'
import { Button } from './button'
import { Log } from './log'
import { AnimationBehaviour } from './animationBehaviour'
import {Menu} from './menu'

export const Display = () => <Container>
    <DisplayContext.Provider value={ useDefaultDisplayContext() }>
        <Menu />
        <Animate/>
        <Log/>
        <Graph/>
        <Button/>
        <AnimationBehaviour/>
    </DisplayContext.Provider>
</Container>