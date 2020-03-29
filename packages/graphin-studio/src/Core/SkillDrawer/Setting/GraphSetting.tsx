import React, { useState } from 'react';
import { GraphSettingProps, GraphSettingState } from '../types';
import { Item } from '@com';

// import AceEditor from "react-ace";
// import "ace-builds/src-noconflict/mode-javascript";
// import "ace-builds/src-noconflict/theme-github";

// import brace from 'brace';
// import 'brace/mode/javascript';
// import 'brace/theme/github';

import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

import { Input, Button, notification } from 'antd';

const TextArea = Input.TextArea;

const GraphSetting: React.FC<GraphSettingProps> = props => {

    let options = props.state.styles.graphOptions || {};

    let [state, setState] = useState<GraphSettingState>({
        errMsg: '',
        optionsText: JSON.stringify(options, null, 4)
    });

    const getValue = (value: string) : object | string => {
        let options = '';
        try {
            options = JSON.parse(value);
        } catch (e) {
            options = e.toString();
        }

        return options;

    };

    const handleSave = () => {

        let options = getValue(state.optionsText);

        if (typeof(options) === 'string') {
            setState({
                errMsg: options,
                optionsText: state.optionsText
            });
            return;
        }

        props.dispatch({
            type: 'graph/updateGraphOptions',
            payload: {
                options: options
            }
        });

    };

    const onChange = (value: string) => {

        setState({
            errMsg: '',
            optionsText: value
        });
    };

    return (
        <>
            {/* <Item title=""> */}
                {/* <AceEditor
                    mode="javascript"
                    theme="github"
                    value={ state.optionsText }
                    onChange={onChange}
                    name={'ace-editor_' + new Date().getTime().toString()}
                    editorProps={{ 
                        $blockScrolling: true
                    }}
                    height="200px"
                />  */}

            <Editor
                value={state.optionsText}
                onValueChange={ onChange }
                highlight={code => { 
                    return highlight(code, languages.js);
                }}
                padding={10}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 14,
                    border: '1px solid #d9d9d9',
                    borderRadius: '4px',
                    // height: '120px'
                }}
            />              
            {/* </Item> */}
            
            <div style={{ color: 'red' }}>
                { state.errMsg }
            </div>

            <Item title="">
                <Button 
                    style={{ width: '100%' }}
                    onClick={ handleSave }>保存配置</Button>
            </Item>
        </>
    );
};

export default GraphSetting;