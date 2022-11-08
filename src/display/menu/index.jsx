import { useOnChange } from './useOnChange'
import { RenderIf } from '../../renderIf'
import { useValidate } from './useValidate'
import { useDisplayContext } from '../displayContext'
import { useEffect, useState } from 'react'
import { Button } from './button'
import { SaveButton } from './saveButton'

const placeholder = 'Introduceti noi date de intrare'

const className = 'placeholder:italic placeholder:text-slate-50 placeholder:text-center placeholder:font-mono placeholder:text-sm bg-gray-800 w-full border rounded-full py-2 px-2 x shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-slate-50 font-mono disabled:opacity-60'

const errorClasses = 'border-rose-500'

const okayClasses = 'border-slate-50 '

const makeClassName = error => {

    return error ? `${ className } ${ errorClasses }` : `${ className } ${ okayClasses }`
}

export const Menu = () => {
    const {isAnimating} = useDisplayContext()
    const [ input, setInput ] = useState('')
    const [ error, setError ] = useState('')
    const [ open, setOpen ] = useState(false)
    const onChange = useOnChange(setInput, setError)
    const validate = useValidate(setError)

    useEffect(() => {
        if (!open) {
            setInput('')
            setError('')
        }
    }, [ open, setInput, setError ])

    return <div className={ 'absolute top-4 left-4 z-10' }>
        <Button open={ open } setOpen={ setOpen }/>
        <RenderIf condition={ open }>
            <div className={'mt-2 flex items-center justify-center'}>
                <input onBlur={ validate }
                       className={ makeClassName(error) } value={ input } onChange={ onChange }
                       disabled={ isAnimating }
                       placeholder={ placeholder } type={ 'text' } name={ 'input' }/>
                <RenderIf condition={!!input}>
                    <SaveButton setOpen={setOpen} input={input} />
                </RenderIf>
            </div>
            <RenderIf condition={ !!error }>
                <span className={ 'text-rose-500 font-mono' }>
                { error }
                </span>
            </RenderIf>
        </RenderIf>
    </div>
}