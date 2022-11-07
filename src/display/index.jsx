import { useContext } from '../context'
import { useGoBack } from './useGoBack'
import { RenderIf } from '../renderIf'
import { stages } from '../stages'

export const Display = () => {
    const {state, stage} = useContext()
    const goBack = useGoBack()

    return <RenderIf condition={stage === stages.display}>
        {JSON.stringify(state)}
        <button onClick={goBack}>Go back</button>
    </RenderIf>
}