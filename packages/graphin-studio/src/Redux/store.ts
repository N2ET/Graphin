import { GrapheneState, NodeType } from '../types';
import Storage from '../Service/Storage';

const storage = new Storage('graphin-studio');

if (!storage.get('config')) {
    storage.set('config', {
        toolbar: {
            direction: 'vertical',
        },
        theme: 'light',
    });
}

const nodeTypes : NodeType[] = [
    {
        nodeType: 'node',
        name: '默认类型（node）'
    }, {
        nodeType: 'skill',
        name: '技能（skill）'
    }, {
        nodeType: 'task',
        name: '任务（task）'
    }, {
        nodeType: 'set',
        name: '集合（set）'
    }
];

const initialState: GrapheneState = {
    data: {
        nodes: [],
        edges: [],
        nodeTypes: nodeTypes
    },
    layout: {
        name: 'force',
        options: {
            preset: {
                name: 'concentric',
            },
        },
    },

    selectedNodes: [],
    drawer: {
        visible: false,
        type: '',
    },
    modal: {
        visible: false,
    },
    searchBar: {
        visible: false,
    },
    toolbar: {
        direction: storage.get('config').toolbar.direction,
    },
    theme: storage.get('config').theme,

    graphRef: {
        current: null,
    },

    styles: {
        graphOptions: {},
        nodeStyles: {}
    }
};

export default initialState;
