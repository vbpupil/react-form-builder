import React from 'react';
import PreviewBar from "./Components/Preview/PreviewBar/PreviewBar";
import FormContainer from "./Components/Form/FormContainer/FormContainer";
import ToolBox from "./Components/ToolBox/ToolBoxContainer/ToolBox";
import './style.css';
import {HtmlElementProps} from './Components/types'

const htmlElements: HtmlElementProps[] = [
    {id: 'text_input', title: 'Text Input', icon: 'fas fa-font', draggable: true, type: 'Text Input'},
    {id: 'select_box', title: 'Select Box', icon: 'far fa-caret-square-down', draggable: true, type: 'Select Box'},
    {id: 'check_box', title: 'Check Box', icon: 'far fa-check-square', draggable: true, type: 'Check Box'},
];

export default function App() {
    return (
        <div className="container">
            <div className="row">
                <PreviewBar/>
            </div>
            <div className="row">
                <div className="col-8">
                    <FormContainer elements={htmlElements}/>
                </div>
                <div className="col-4">
                    <ToolBox elements={htmlElements}/>
                </div>
            </div>
        </div>
    );
}