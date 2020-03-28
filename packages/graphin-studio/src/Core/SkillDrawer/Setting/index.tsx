import React from 'react';
import FoldingPanel from '../../../Components/FoldingPanel/FoldingPanel';
import { SettingProps } from '../types';

const Setting: React.FC<SettingProps> = props => {

    const data = [{
        title: '图表配置',
        children: 'styling'
    }, {
        title: '节点样式配置',
        children: 'node styles'
    }]

    return (
        <FoldingPanel data={ data } />
    );
};

export default Setting;