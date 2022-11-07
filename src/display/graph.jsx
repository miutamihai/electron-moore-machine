import GraphDisplay from 'react-graph-vis'

export const Graph = () => {
    const graph = {
        nodes: [
            { id: 1, label: "Node 1", title: "node 1 tootip text" },
            { id: 2, label: "Node 2", title: "node 2 tootip text" },
            { id: 3, label: "Node 3", title: "node 3 tootip text" },
            { id: 4, label: "Node 4", title: "node 4 tootip text" },
            { id: 5, label: "Node 5", title: "node 5 tootip text" }
        ].map(node => ({...node, color: '#ffffff', shape: 'circle'})),
        edges: [
            { from: 1, to: 2 },
            { from: 1, to: 3 },
            { from: 2, to: 4 },
            { from: 2, to: 5 }
        ]
    };

    const options = {
        layout: {
            hierarchical: false
        },
        edges: {
            color: "#ffffff"
        },
        height: `${screen.height - 120}px`
    };

    const events = {
        select: function(event) {
            var { nodes, edges } = event;
        }
    };
    return <GraphDisplay
            graph={graph}
            options={options}
            events={events}
            getNetwork={network => {
                //  if you want access to vis.js network api you can set the state in a parent component using this property
            }}
        />
    }