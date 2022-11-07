import { useContext } from '../../context'
import { useOnChange } from './useOnChange'
import { RenderIf } from '../../renderIf'
import { useValidate } from './useValidate'

const className = 'placeholder:italic placeholder:text-slate-50 placeholder:text-center placeholder:font-mono placeholder:text-md bg-gray-800 w-full border rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-slate-50 font-mono disabled:opacity-60'

const placeholder = 'Introduceti datele de intrare'

const errorClasses = 'border-rose-500'

const okayClasses = 'border-slate-50 '

const makeClassName = error => {

    return error ? `${ className } ${ errorClasses }` : `${className} ${okayClasses}`
}

export const Input = () => {
    const {input, file: {data}, errors: {filePicker, input: inputError}} = useContext()
    const onChange = useOnChange()
    const validate = useValidate()

    return <>
        <input onBlur={validate}
            className={ makeClassName(inputError) } value={ input } onChange={ onChange }
            disabled={ !!data || !!filePicker }
            placeholder={ placeholder } type={ 'text' } name={ 'input' }/>
        <RenderIf condition={ !!inputError }>
            <span className={ 'text-rose-500 font-mono' }>
            { inputError }
            </span>
        </RenderIf>
    </>
}