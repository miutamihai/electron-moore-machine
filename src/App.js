import { State } from './state'

export const App = () => <div
    className={ 'flex h-screen w-screen flex-col items-center justify-center bg-gray-800 space-y-5 px-5' }>
    <h1 className={ 'text-5xl text-slate-50 font-mono mb-12' }>Masina Moore</h1>
    <p className={ 'text-slate-50 text-base font-mono' }>Introduceti datele in campul de mai jos (sau apasati <span
        className={ 'font-bold border-white border-2 rounded-md' }>Choose file</span> pentru a
        incarca un fisier) si apasati <span className={ 'font-bold border-white border-2 rounded-md' }>Executa</span>
    </p>
    <State />
    <input
        class="placeholder:italic placeholder:text-slate-50 placeholder:text-center placeholder:font-mono placeholder:text-md bg-gray-800 w-full border border-slate-50 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
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