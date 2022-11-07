import GraphDisplay from 'react-graph-vis'
import { useBuildGraph } from './useBuildGraph'
import { useSetNetwork } from './useSetNetwork'

const fontFamily = 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'

const nodeFont = {
    size: 30,
    face: fontFamily,
    color: '#1F2937',
}

const edgeFont = {
    size: 30,
    face: fontFamily,
    color: '#1f2937',
    bold: {
        color: '#2563eb'
    }
}

const edgeScaling = {
    scaling: {
        min: 1,
        max: 15,
        label: {
            enabled: true,
            min: 14,
            max: 30,
            maxVisible: 30,
            drawThreshold: 5
        },
    }
}

const color = {
    background: '#f8fafc',
    highlight: {
        background: '#2563eb'
    }
}

const edgeColor = {
    color: '#f8fafc',
    highlight: '#2563eb'
}

export const Graph = () => {
    const graph = useBuildGraph()
    const setNetwork = useSetNetwork()

    const styledGraph = {
        nodes: graph.nodes.map(node => ({...node, color, shape: 'circle', font: nodeFont})),
        edges: graph.edges.map(edge => ({...edge, color: edgeColor,  width: 8, font: edgeFont, ...edgeScaling})),
    }

    const options = {
        layout: {
            hierarchical: {
                nodeSpacing: 800
            }
        },
        edges: {
            color: edgeColor,
        },
        height: `${ screen.height - 120 }px`,
        physics: {
            enabled: false,
            solver: 'repulsion',
            repulsion: {
                nodeDistance: 400
            }
        }
    }

    return <GraphDisplay
        graph={ styledGraph }
        options={ options }
        getNetwork={ setNetwork }
    />
}