import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {IntlProvider} from "react-intl";
import {Locale, Language} from './languages/IntlSetup'
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

ReactDOM.render(
    <DndProvider backend={HTML5Backend}>
        <IntlProvider locale={Locale} messages={Language}>
            <App/>
        </IntlProvider>
    </DndProvider>,
    document.getElementById('root')
);
