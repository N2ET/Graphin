import React, { useState } from 'react';
import { NodeTypeStyleSetting } from '../types';
import { Item } from '@com';

// import AceEditor from "react-ace";
// import "ace-builds/src-noconflict/mode-javascript";
// import "ace-builds/src-noconflict/theme-github";

// import AceEditor from "react-ace-builds";
// import "react-ace-builds/webpack-resolver-min";

import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import { Button } from 'antd';

const Setting: React.FC<NodeTypeStyleSetting> = props => {

    let initState = {
        
    };
    let nodeTypes = props.state.data.nodeTypes;

    const getTextKey = (nodeType: string) => nodeType + '_text';
    const getErrMsgKey = (nodeType: string) => `${nodeType}_errMsg`;

    const getValue = (value: string) : object | string => {
        let options = '';
        try {
            options = JSON.parse(value);
        } catch (e) {
            options = e.toString();
        }

        return options;
    };

    nodeTypes.forEach(item => {
        // initState[item.nodeType] = {};

        let textKey = getTextKey(item.nodeType);
        let errKey = getErrMsgKey(item.nodeType);
        initState[textKey] = '';
        initState[errKey] = '';
    });

    let [ state, setState ] = useState(initState);

    let onChange = (nodeType: string, value: string) => {

        let text = getTextKey(nodeType);

        setState({
            ...state,
            ...{
                [text]: value
            }
        });  
    };

    let onSave = (nodeType: string) => {
        let textKey = getTextKey(nodeType);
        let errKey = getErrMsgKey(nodeType);

        let options = getValue(state[textKey]);

        if (typeof(options) === 'string') {
            setState({
                ...state,
                ...{
                    [errKey]: options
                }
            });
            return;
        }

        setState({
            ...state,
            ...{
                [errKey]: ''
            }
        });

        props.dispatch({
            type: 'graph/updateNodeTypeOptions',
            payload: {
                nodeType: nodeType,
                options: options
            }
        });

    };

    // let text = state;

    return (
        // <AceEditor
        //     mode="javascript"
        //     theme="github"
        //     onChange={onChange}
        //     value={ text }
        //     name={'ace-editor_' + new Date().getTime().toString()}
        //     editorProps={{ 
        //         $blockScrolling: true
        //     }}
        //     height="200px"
        // />

        // <Editor
        //     value={state}
        //     onValueChange={ onChange }
        //     highlight={code => { 
        //         return highlight(code, languages.js);
        //     }}
        //     padding={10}
        //     style={{
        //         fontFamily: '"Fira code", "Fira Mono", monospace',
        //         fontSize: 14,
        //         border: '1px solid #d9d9d9',
        //         borderRadius: '4px',
        //         height: '120px'
        //     }}
        // />
        <>
            {
                nodeTypes.map(item => {

                    let nodeType = item.nodeType;

                    return (
                        <Item title={ `${item.name}样式配置` }>
                            <Editor
                                value={state[nodeType + '_text']}
                                onValueChange={ (value: string) => {
                                    onChange(nodeType, value);
                                } }
                                highlight={code => { 
                                    return highlight(code, languages.js);
                                }}
                                padding={10}
                                style={{
                                    fontFamily: '"Fira code", "Fira Mono", monospace',
                                    fontSize: 14,
                                    border: '1px solid #d9d9d9',
                                    borderRadius: '4px'
                                }}
                            />
                            <div style={{ color: 'red' }}>
                                { state[`${nodeType}_errMsg`] }
                            </div>
                            <Button
                                style={{ width: '100%', marginTop: '15px' }}
                                onClick={ () => {
                                    onSave(nodeType);
                                } }>保存配置</Button>
                        </Item>
                    );

                })
            }
        </>
    );
};

export default Setting;