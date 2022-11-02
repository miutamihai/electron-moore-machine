export const New = ({onClick, small}) => {
    const defaultClassName = 'bg-slate-50 text-gray-800 rounded-full text-xl mw-full py-2'
    const smallClassName = 'bg-slate-50 text-gray-800 rounded-full text-xl h-8 w-8'

    return <button onClick={ onClick }
                   className={ small ? smallClassName : defaultClassName }>+</button>
}