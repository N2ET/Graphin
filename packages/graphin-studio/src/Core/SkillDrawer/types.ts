import { Dispatch, Node, GrapheneState, NodeType } from '../../types';
import { GraphOptions } from '@antv/g6';
export interface AddNodesProps {
    dispatch?: Dispatch;
    node?: Node;
    state: GrapheneState;
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
    dispatch?: Dispatch;
    state: GrapheneState;
    // graphOptions: Partial<GraphOptions>;
}

export interface GraphSettingProps {
    dispatch?: Dispatch;
    state: GrapheneState;
    // graphOptions: Partial<GraphOptions>
}

export interface GraphSettingState {
    errMsg: string,
    optionsText: string
}

export interface NodeTypeStyleSetting {
    dispatch?: Dispatch;
    state: GrapheneState;   
}

