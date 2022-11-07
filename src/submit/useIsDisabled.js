import { useContext } from '../context'

const fields = ['filePicker', 'input', 'state']

const fieldsHaveErrors = ({errors}) => fields.some(field => !!errors[field])

const noInputSelected = ({input, file: {name}}) => !input && !name

export const useIsDisabled = () => {
    const context = useContext()

    return noInputSelected(context) || fieldsHaveErrors(context)
}