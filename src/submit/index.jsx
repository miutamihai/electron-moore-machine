import { useIsDisabled } from './useIsDisabled'
import { useValidateStatesCommitted } from './useValidateStatesCommitted'

const className = 'font-mono rounded-full bg-slate-50 text-gray-800 text-lg px-3 py-1 font-semibold disabled:opacity-60'

export const Submit = () => {
    const isDisabled = useIsDisabled()
    const validateStatesCommitted = useValidateStatesCommitted()
    const onClick = () => {
        validateStatesCommitted(() => console.log('Success!'))
    }

    return <button className={ className } disabled={ isDisabled }
                   onClick={ onClick }>Executa
    </button>
}