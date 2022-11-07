import GraphDisplay from 'react-graph-vis'
import { useBuildGraph } from './useBuildGraph'

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

export const Graph = () => {
    const graph = useBuildGraph()

    const styledGraph = {
        nodes: graph.nodes.map(node => ({...node, color: '#f8fafc', shape: 'circle', font: nodeFont})),
        edges: graph.edges.map(edge => ({...edge, width: 8, font: edgeFont, ...edgeScaling})),
    }

    const options = {
        layout: {
            hierarchical: {
                nodeSpacing: 800
            }
        },
        edges: {
            color: '#f8fafc'
        },
        height: `${ screen.height - 120 }px`,
        physics: {
            enabled: false,
            solver: "repulsion",
            repulsion: {
                nodeDistance: 400
            }
        }
    }

    return <GraphDisplay
        graph={ styledGraph }
        options={ options }
        getNetwork={network => {
            network.stabilize()
        }}
    />
}