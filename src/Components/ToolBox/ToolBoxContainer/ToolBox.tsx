import React from 'react';
import {ToolBoxProps} from '../../types'
import {FormattedMessage} from "react-intl";
import ToolBoxElement from "../ToolBoxElement/ToolBoxElement";

export default function ToolBox(props: ToolBoxProps) {
    return (
        <div className="toolbox-wrapper">
            <h4 className="toolbox-header">
                <FormattedMessage id="toolbox.header" defaultMessage="HTML Elements"/>
            </h4>
            <ul className="toolbox-elements">
                {props.elements.map(element =>
                    <ToolBoxElement {...element}/>
                )}
            </ul>
        </div>
    );
}

ToolBox.defaultProps = {
    elements: [
        {id: 'text_input', title: 'Text Input', icon: 'fas fa-font', draggable: true, type: 'Text Input'},
    ]
}
