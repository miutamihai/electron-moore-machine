import {Text} from './text'
import { State } from './state'
import {Input} from './input'
import {FilePicker} from './filePicker'
import {Submit} from './submit'
import {Context, useDefaultContext} from './context'

export const App = () => <Context.Provider value={useDefaultContext()}>
    <div
        className={ 'flex h-screen w-screen flex-col items-center justify-center bg-gray-800 space-y-5 px-5' }>
        <Text />
        <State />
        <Input />
        <FilePicker />
        <Submit />
    </div>
</Context.Provider>