import React, {useState} from 'react';
import {FormattedMessage} from "react-intl";
import FormElement from "../FormElement/FormElement";
import {useDrop} from "react-dnd";
import {FormContainerProps, HtmlElementProps} from "../../types";

export default function FormContainer(props: FormContainerProps) {
    const [formElements, setFormElements] = useState([
        {id: 'text-input', title: 'Text Input', icon: 'fas fa-font', draggable: true},
    ]);

    const [{isOver}, drop] = useDrop(() => ({
        accept: "element",
        drop: (item: HtmlElementProps) => addElementToForm(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addElementToForm = (id: string) => {
        const selectedElement = props.elements.filter((element) => id === element.id)
        // console.log(selectedElement[0])
        setFormElements((formElements) => [...formElements, selectedElement[0]]);
    };

    return (
        <div className="form-container-wrapper">
            <div className="form-container-place-holder" ref={drop}>
                <div>
                    {formElements.length > 0 ?
                        <ul>
                            {formElements.map(element=> <FormElement id={element.id}/>)}
                        </ul>
                        :
                        <div className="dropzone">
                            <FormattedMessage id="formContainer.place-holder"
                                              defaultMessage="Drag Elements here to build form."/>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}