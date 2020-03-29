import React from 'react';
import FoldingPanel from '../../../Components/FoldingPanel/FoldingPanel';
import { SettingProps } from '../types';

import GraphSetting from './GraphSetting';
import NodeTypeStyleSetting from './NodeTypeStyleSetting';

const Setting: React.FC<SettingProps> = props => {

    const data = [{
        title: '图表配置',
        children: <GraphSetting {...props} />
    }, {
        title: '节点样式配置',
        children: <NodeTypeStyleSetting {...props} />
    }]

    return (
        <FoldingPanel data={ data } />
    );
};

export default Setting;