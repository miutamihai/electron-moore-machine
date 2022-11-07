import {Text} from './text'
import { State } from './state'
import {Context, useDefaultContext} from './context'

export const App = () => <Context.Provider value={useDefaultContext()}>
    <div
        className={ 'flex h-screen w-screen flex-col items-center justify-center bg-gray-800 space-y-5 px-5' }>
        <Text />
        <State />
        <input
            className="placeholder:italic placeholder:text-slate-50 placeholder:text-center placeholder:font-mono placeholder:text-md bg-gray-800 w-full border border-slate-50 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-slate-50 font-mono"
            placeholder="Introduceti datele de intrare" type="text" name="input"/>
        <input type="file" className="block text-sm text-slate-50 font-mono
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-gray-800
      hover:file:bg-violet-100 file:font-mono
    "/>
        <button className={ 'font-mono rounded-full bg-slate-50 text-gray-800 text-lg px-3 py-1 font-semibold' }>Executa
        </button>
    </div>
</Context.Provider>