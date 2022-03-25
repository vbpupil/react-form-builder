import React from 'react';
import {FormElementProps} from "../../types";

export default function FormElement(props:FormElementProps) {
    return (
        <li key={props.id} className="form-group form-element">
            <label className="form-element-label">
                <span>Placeholder label</span>
            </label>
            <input type="text" className="form-control" name=""/>
        </li>
    );
}