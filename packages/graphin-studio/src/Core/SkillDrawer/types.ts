import { Dispatch, Node, GrapheneState, NodeType } from '../../types';
export interface AddNodesProps {
    [key: string]: any
};

export interface NormalProps {
    dispatch?: Dispatch;
    node?: Node;
    // parentNode?: Node,
    state: GrapheneState;
};


// export interface NodeType {
//     name: string;
//     nodeType: string;
// };

export interface NormalState {
    nodeTypes: NodeType[],
    node: Node
};

export interface SettingProps {

}

