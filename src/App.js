import { Context, useDefaultContext } from './context'
import { Setup } from './setup'
import {Display} from './display'

export const App = () => <Context.Provider value={ useDefaultContext() }>
    <Setup />
    <Display />
</Context.Provider>