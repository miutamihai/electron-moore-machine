import { useState } from 'react'

const className = 'bg-gray-800 w-full py-2 pl-9 pr-3 shadow-sm border-b-2 border-slate-50 focus:outline-none focus:border-sky-500 text-slate-50 text-md font-mono'

export const Relation = () => {
    const [value, setValue] = useState('')

    return <input value={value} onChange={event => setValue(event.target.value)} className={className} />
}