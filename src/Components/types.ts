export interface HtmlElementProps {
    id: string;
    icon: string;
    title: string;
    draggable: boolean;
};

export interface ToolBoxProps {
    elements: ToolBoxElements[]
};

export interface ToolBoxElements {
    id: string;
    title: string;
    icon: string;
    draggable: boolean;
}

export interface ToolBoxElementProps {
    id: string;
    icon: string;
    title: string;
    draggable: boolean;
};

export interface FormContainerProps{
    elements: HtmlElementProps[]
};

export interface FormElementProps{
    id: string;
};