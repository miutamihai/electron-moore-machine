import {useContext} from '../context'
import { useOnChange } from './useOnChange'

const className = 'placeholder:italic placeholder:text-slate-50 placeholder:text-center placeholder:font-mono placeholder:text-md bg-gray-800 w-full border border-slate-50 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-slate-50 font-mono'

const placeholder = 'Introduceti datele de intrare'

export const Input = () => {
    const {input} = useContext()
    const onChange = useOnChange()

    return <input
        className={className} value={input} onChange={onChange}
        placeholder={placeholder} type={'number'} name={'input'}/>
}