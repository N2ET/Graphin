import React, { useRef } from 'react';
import Graphin from '@antv/graphin';
import { Toolbar, ContextMenu } from '@antv/graphin-components';
import { GraphProps } from './types';

/** custom */
import renderToolbar from './Custom/renderToolbar';
import renderContextMenu from './Custom/renderContextMenu';

/** custom  extend */
import extend from './Extend';

import useGraphEvents from './Events/useGraphEvents';

/** components */
import NodeEdgeCount from './Core/NodeEdgeCount';

import '@antv/graphin/dist/index.css';
import '@antv/graphin-components/dist/index.css';

const Graphene = (props: GraphProps) => {
    const graphRef = useRef(null) as any; // eslint-disable-line
    const { dispatch, data, layout, toolbar, store,  styles} = props;

    useGraphEvents(store, graphRef, dispatch);
    React.useEffect(() => {
        dispatch({
            type: 'graph/graphRef',
            payload: graphRef,
        });
        // 将graph实例传给全局
    }, []);
    // eslint-disable-next-line no-console

    console.log(extend);

    let count = 0;
    let newData = data;
    let nodes = data.nodes.map(node => {
        let type = node.data.type;
        
        if (styles.nodeStyles[type]) {
            Object.assign(node, styles.nodeStyles[type]);
            count ++;
        }

        return node;
    });

    if (count) {
        newData = {
            ...data,
            nodes
        };
    }
    
    return (
        <Graphin data={ newData } layout={layout} ref={graphRef} extend={extend}
            options={styles.graphOptions}>
            {/** 官方组件 */}
            <Toolbar
                direction={toolbar.direction}
                render={renderProps => {
                    return renderToolbar(renderProps, store, dispatch);
                }}
            />
            <ContextMenu options={renderContextMenu({ ...store, dispatch })} />
            <NodeEdgeCount />

            {/** 自定义组件  */}
            {/* <OperatorBar dispatch={dispatch} state={state} />
          
            <SearchBar dispatch={dispatch} state={state} />
            <GraphDrawer dispatch={dispatch} state={state} />
            <GraphModal dispatch={dispatch} state={state} /> */}
        </Graphin>
    );
};

export default Graphene;
