import { useOnChange } from './useOnChange'
import { useContext } from '../context'
import { RenderIf } from '../renderIf'

const className = `block text-sm text-slate-50 font-mono
file:mr-4 file:py-2 file:px-4
file:rounded-full file:border-0
file:text-sm file:font-semibold
file:bg-violet-50 file:text-gray-800
hover:file:bg-violet-100 file:font-mono
`

const errorClasses = 'border-2 border-rose-500 rounded-full'

const makeClassName = error => error ? `${ className } ${ errorClasses }` : className

export const FilePicker = () => {
    const onChange = useOnChange()
    const {errors: {filePicker: error}} = useContext()

    return <>
        <input type="file" className={ makeClassName(error) } onChange={ onChange }/>
        <RenderIf condition={ !!error }>
            <span className={ 'text-rose-500' }>
            { error }
            </span>
        </RenderIf>
    </>
}
