import { useContext } from '../context'
import { RenderIf } from '../renderIf'
import { stages } from '../stages'

const className = `
w-screen h-screen flex justify-center items-center
flex-col bg-gray-800 px-5
`

export const Container = ({children}) => {
    const {stage} = useContext()

    return <RenderIf condition={stage === stages.display}>
        <div className={className}>
            {children}
        </div>
    </RenderIf>
}