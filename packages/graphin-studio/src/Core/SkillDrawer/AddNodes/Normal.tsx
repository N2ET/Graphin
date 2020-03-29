import React, { useState } from 'react';
import { NormalProps, NormalState } from '../types';
import { Select, Input, Button, Divider, Icon } from 'antd';
// import { PlusOutlined } from '@ant-design/icons';
import { Item } from '@com';
import { NodeData, NodeType } from '../../../types';

const SelectOption = Select.Option;
const { TextArea } = Input;

// const nodeTypes : NodeType[] = [
//     {
//         nodeType: 'node',
//         name: '默认类型（node）'
//     }, {
//         nodeType: 'skill',
//         name: '技能（skill）'
//     }, {
//         nodeType: 'task',
//         name: '任务（task）'
//     }, {
//         nodeType: 'set',
//         name: '集合（set）'
//     }
// ];

const getNodeData = function (data: any = {}) : NormalState {

    let nodeData = data.nodeData;
    let id = nodeData?.id || new Date().getTime().toString();

    return {
        node: {
            id: id,
            data: Object.assign({
                id: id,
                type: 'node',
                label: '',
                data: {
                    description: '',
                    parentID: ''
                },
                properties: []
            }, data.nodeData || {}),
            shape: 'circle',
            label: ''
        },
        nodeTypes: JSON.parse(JSON.stringify(data.nodeTypes))
    }
}

const Normal: React.FC<NormalProps> = (props) => {

    const { dispatch } = props; 
    const graphState = props.state; 

    let [ state, setState ] = useState<NormalState>(getNodeData({
        nodeTypes: graphState.data.nodeTypes
    }));

    const handleClick = () => {
        dispatch({
            type: 'graph/addSkillNodes',
            payload: {
                nodes: [state.node]
            }
        });

        setState(getNodeData({
            nodeData: {
                type: state.node.data.type
            },
            nodeTypes: graphState.data.nodeTypes
        }));
    };

    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        state.node.data.data.description =  e.target.value
        let data = state.node.data.data;
        state.node.data.properties = (Object.keys(data).map(key => {
            return {
                name: key,
                code: key,
                value: data[key]
            };
        }));
        setState({
            ...state
        });
    };

    const handleParentChange = (value: string) => {
        state.node.data.data.parentID = value;
        let data = state.node.data.data;
        state.node.data.properties = (Object.keys(data).map(key => {
            return {
                name: key,
                code: key,
                value: data[key]
            };
        }));
        setState({
            ...state
        });
    };

    let nodeData = state.node.data;

    return (
        <div>
            <Item title="名称">
                <Input value={nodeData.label} onChange={ 
                    (e: React.ChangeEvent<HTMLInputElement>) => {
                    
                    // state如果是对象时，setState更新要重新深copy一个对象？？还是能通过.修改其中一个值
                    state.node.data.label = e.target.value;
                    state.node.label = e.target.value;
                    setState({
                        ...state
                    });
                } }/>
            </Item>
            <Item title="类型">
                <Select style={{ width: '100%' }} 
                        placeholder="选择节点类型"
                        // defaultValue={nodeData.type || 'node'}
                        value={ nodeData.type || 'node' }
                        onChange={ (value: string) => {

                            // 这里怎么更新嵌套对象的属性比较好
                            let newState = state;
                            newState.node.data.type = value;
                            setState({
                                ...newState
                            })
                        } }>
                    { graphState.data.nodeTypes.map(item => {
                        const { nodeType, name } = item;
                        return (
                            <SelectOption key={ nodeType } value={ nodeType }>{ name }</SelectOption>
                        );
                    }) }
                </Select>
            </Item>
            <Item title="父节点">
                <Select style={{ width: '100%' }}
                        placeholder="选择父节点"
                        value={ nodeData.data.parentID }
                        onChange={ handleParentChange }> 
                    {
                        graphState.data.nodes.map(node => {
                            if (node.id === nodeData.id) {
                                return '';
                            }

                        return <SelectOption key={ node.id } value={ node.id }>{ node.data.label }</SelectOption>;

                        })   
                    } 
                </Select>
            </Item>
            <Item title="描述">
                <TextArea 
                    value={ nodeData.data.description } 
                    onChange={ handleTextareaChange }
                    rows={4} />
            </Item>
            <Item title="">
                <Button style={{ width: '100%'}} onClick={handleClick}>
                    添加节点
                </Button>
            </Item>
        </div>
    );
};

export default Normal;