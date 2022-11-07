import { useDisplayContext } from './displayContext'
import { RenderIf } from '../renderIf'

const scrollBarClasses = 'scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full hover:scrollbar-thumb-slate-50'

export const Log = () => {
    const {log} = useDisplayContext()

    return <RenderIf condition={!!log.length}>
        <div className={`max-w-sm max-h-60 rounded overflow-auto shadow-lg absolute right-4 bottom-4 z-10 ${scrollBarClasses}`}>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-slate-50 font-mono">State log</div>
                <ul className={'list-disc'}>
                    {log.map((entry, index, list) => {
                        const className = 'text-slate-50 text-base font-mono'

                        return <li key={ entry } className={ index !== list.length - 1 ? `${className} opacity-60` : className }>
                            { entry }
                        </li>
                    })}
                </ul>
            </div>
        </div>
    </RenderIf>
}