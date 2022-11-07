import { useGoBack } from './useGoBack'

const className = `
font-mono rounded-full bg-slate-50 text-gray-800 text-lg px-3 
py-1 font-semibold disabled:opacity-60 absolute bottom-4 z-10
`

export const Button = () => {
    const goBack = useGoBack()

    return <button className={className} onClick={goBack}>
        Inapoi
    </button>
}