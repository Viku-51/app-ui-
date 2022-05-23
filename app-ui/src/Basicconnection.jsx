import createEngine, { 
    DefaultLinkModel, 
    DefaultNodeModel,
    DiagramModel 
} from '@projectstorm/react-diagrams';

import {
    CanvasWidget
} from '@projectstorm/react-canvas-core';

// create an instance of the engine with all the defaults
const engine = createEngine();

// node 1
const node1 = new DefaultNodeModel({
    name: 'Node 1',
    color: 'rgb(0,192,255)',
});
node1.setPosition(100, 100);
let port1 = node1.addOutPort('Out');

// node 2
const node2 = new DefaultNodeModel({
    name: 'Node 1',
    color: 'rgb(0,192,255)',
});
node2.setPosition(100, 100);
let port2 = node2.addOutPort('Out');
// link them and add a label to the link
const link = port1.link<DefaultLinkModel>(port2);
link.addLabel('Hello World!');

const model = new DiagramModel();
model.addAll(node1, node2, link);
engine.setModel(model);

<CanvasWidget engine={engine} />   

const YourDiagram = () => (
    <Diagram initState={{
        nodes: [
          {
            id: "node_1",
            position: [300, 300],
            type: "output_horizontal" // there are other built-in types, such as input_output_horizontal, input_output_vertical, input_vertical, input_horizontal, output_vertical, star. You can also provide your own types in settings.
          },
          {
            id: "node_2",
            position: [520, 400],
            type: "input_horizontal" 
          },
        ],
        links: [
          {
            source: {
              nodeId: "node_1",
              portId: "output"
            },
            target: {
              nodeId: "node_2",
              portId: "input"
            }
          },
        ]
      }} />
);