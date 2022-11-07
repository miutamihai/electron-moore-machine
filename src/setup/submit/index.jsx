import { useIsDisabled } from './useIsDisabled'
import { useValidateState } from './useValidateState'
import { useGoToDisplay } from './useGoToDisplay'

const className = 'font-mono rounded-full bg-slate-50 text-gray-800 text-lg px-3 py-1 font-semibold disabled:opacity-60'

export const Submit = () => {
    const isDisabled = useIsDisabled()
    const validateStatesCommitted = useValidateState()
    const goToDisplay = useGoToDisplay()
    const onClick = () => {
        validateStatesCommitted(goToDisplay)
    }

    return <button className={ className } disabled={ isDisabled }
                   onClick={ onClick }>Executa
    </button>
}