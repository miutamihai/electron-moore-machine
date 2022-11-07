import {useContext} from '../context'

const className = 'font-mono rounded-full bg-slate-50 text-gray-800 text-lg px-3 py-1 font-semibold disabled:opacity-60'

export const Submit = () => {
    const {errors: {filePicker, input}} = useContext()

    return <button className={ className } disabled={!!filePicker || !!input} onClick={() => console.log('submit triggered')}>Executa
    </button>
}