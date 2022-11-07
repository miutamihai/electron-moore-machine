import { useOnChange } from './useOnChange'
import { useContext } from '../context'
import { RenderIf } from '../renderIf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useClearFile } from './useClearFile'

const className = `block text-sm text-slate-50 font-mono
file:mr-4 file:py-2 file:px-4
file:rounded-full file:border-0
file:text-sm file:font-semibold
file:bg-violet-50 file:text-gray-800
hover:file:bg-violet-100 file:font-mono disabled:opacity-60
`

const errorClasses = 'border-2 border-rose-500 rounded-full'

const makeClassName = error => error ? `${ className } ${ errorClasses }` : className

const makeContainerClassName = error => {
    const initial = 'flex w-full justify-center items-center'

    return error ? `${initial} flex-col` : initial
}

export const FilePicker = () => {
    const onChange = useOnChange()
    const clearFile = useClearFile()
    const {errors: {filePicker: error}, file: {name}, input} = useContext()

    return <div className={makeContainerClassName(error)}>
        <input type="file" id={'filepicker'} disabled={!!input} className={ makeClassName(error) } onChange={ onChange }/>
        <RenderIf condition={ !!error }>
            <span className={ 'text-rose-500 font-mono' }>
            { error }
            </span>
        </RenderIf>
        <RenderIf condition={!!name}>
            <div className={'flex max-h-full justify-center align-center ml-4'}>
                <FontAwesomeIcon onClick={clearFile} icon={faTimes} className={'bg-slate-50 text-gray-800 rounded-full text-md h-6 w-6 mr-2 cursor-pointer'}/>
            </div>
        </RenderIf>
    </div>
}
