import { useDisplayContext } from './displayContext'
import { RenderIf } from '../renderIf'

const scrollBarClasses = 'scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full hover:scrollbar-thumb-slate-50'

export const Log = () => {
    const {log} = useDisplayContext()

    return <RenderIf condition={!!log.length}>
        <div className={`max-w-sm max-h-60 rounded overflow-auto shadow-lg absolute top-4 right-4 z-10 ${scrollBarClasses}`}>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-slate-50 font-mono">Jurnal al state-ului</div>
                <ul className={'list-disc'}>
                    {log.map((entry, index, list) => {
                        let className = 'text-base font-mono'
                        if (entry.type === 'log') {
                           className = `${className} text-slate-50`
                        } else if (entry.type === 'error') {
                            className = `${ className } text-rose-500`
                        } else if (entry.type === 'warning') {
                            className = `${className} text-yellow-500`
                        } else {
                            className = `${className} text-green-500`
                        }


                        return <li key={ `${entry}-${index}` } className={ index !== list.length - 1 ? `${className} opacity-60` : className }>
                            { entry.message }
                        </li>
                    })}
                </ul>
            </div>
        </div>
    </RenderIf>
}