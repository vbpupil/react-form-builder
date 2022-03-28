export interface HtmlElementProps {
    id: string;
    icon: string;
    title: string;
    draggable: boolean;
    type: string;
};

export interface ToolBoxElementProps {
    id: string;
    icon: string;
    title: string;
    draggable: boolean;
};

export interface FormContainerProps{
    elements: HtmlElementProps[]
};

export interface FormElementProps extends HtmlElementProps{
};

export interface ToolBoxProps {
    elements: HtmlElementProps[]
};