import { useState } from 'react'

const className  = 'placeholder:italic placeholder:text-slate-50 placeholder:text-center placeholder:font-mono placeholder:text-md bg-gray-800 w-full border border-slate-50 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-slate-50 text-md font-mono'

export const Node = () => {
    const [value, setValue] = useState('')

    return <input value={value} onChange={event => setValue(event.target.value)} className={className}  />
}