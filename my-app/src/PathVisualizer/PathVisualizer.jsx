import React, {Component} from 'react';
import Node from './Node/Node';

import './PathVisualizer.css';

export default class PathVisualizer extends Component{
    constructor(props){
        super(props);
        this.state = {
            nodes:[],
        };
    }

    componentDidMount(){
        const nodes = [];
        for (let r = 0; r < 15; r ++){
            const curr_row = [];
            for (let c = 0; c < 64; c++){
                curr_row.push([]);
            }
            nodes.push(curr_row);
        }
        this.setState({nodes});
    }

    render(){
        const {nodes} = this.state;
        console.log(nodes);
        return (
        <div className = "grid">
            {nodes.map((row,rowIdx) => {
                return <div>
                    {row.map((node,nodeIdx) => <Node></Node>)}
                </div>
            })}
        </div>
        );
    }
}