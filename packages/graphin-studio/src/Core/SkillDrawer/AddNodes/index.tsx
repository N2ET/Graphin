import React from 'react';
import FoldingPanel from '../../../Components/FoldingPanel';
import { AddNodesProps } from '../types';
import Normal from './Normal';

const AddNodes: React.FC<AddNodesProps> = props => {

    const data = [{
        title: '添加节点',
        children: <Normal {...props} />
    }];

    return (
        <div>
            <FoldingPanel data={data} />
        </div>
    );
};

export default AddNodes;