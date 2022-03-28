import React from 'react';
import {FormElementProps} from "../../types";

export default function FormElement(props:FormElementProps) {
    return (
        <li key={props.id} className="form-group form-element">
            <h6>
            <span className="badge badge-pill badge-info small">id: {props.id}</span>
            <span className="badge badge-pill badge-info">type: {props.type}</span>
            </h6>

            <label className="form-element-label">
                <span>Placeholder label</span>
            </label>
            <input type="text" className="form-control" name=""/>
        </li>
    );
}