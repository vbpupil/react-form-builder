import React from 'react';
import {ToolBoxElementProps} from '../../types'
import {useDrag} from "react-dnd";

export default function ToolBoxElement(props: ToolBoxElementProps) {
    const [{isDragging}, drag] = useDrag(() => ({
        type:"element",
        item: {id: props.id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
            didDrop: !!monitor.didDrop()
        }),
    }));

    return (
        <li ref={drag} key={props.id} draggable={props.draggable} style={{background: isDragging ? "#fafafa" : "white"}}>
            <i className={props.icon}></i> {props.title}
        </li>
    );
}
