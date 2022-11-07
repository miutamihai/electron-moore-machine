import { useContext } from '../context'
import { RenderIf } from '../renderIf'
import { stages } from '../stages'
import { Text } from './text'
import { State } from './state'
import { Input } from './input'
import { FilePicker } from './filePicker'
import { Submit } from './submit'

export const Setup = () => {
    const {stage} = useContext()

    return <RenderIf condition={stage === stages.setup}>
        <div className={ 'flex h-screen w-screen flex-col items-center justify-center bg-gray-800 space-y-5 px-5' }>
            <Text/>
            <State/>
            <Input/>
            <FilePicker/>
            <Submit/>
        </div>
    </RenderIf>
}