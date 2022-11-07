import { useContext } from '../context'

export const useBuildGraph = () => {
    const {state} = useContext()

    return {
        nodes: Object.keys(state).map(node => {
            const value = node.split('[')[0]

            return {
                id: value,
                label: node
            }
        }),
        edges: Object.entries(state)
            .flatMap(([ key, value ]) => {
                if (!value) {
                    return []
                }

                return value.map(([ label, target ]) => ({
                    id: label,
                    from: key.split('[')[0],
                    to: target,
                    label
                }))
            })
    }
}