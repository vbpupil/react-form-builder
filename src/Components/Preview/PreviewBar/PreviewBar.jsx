import React from 'react';
import {FormattedMessage} from "react-intl";

export default function PreviewBar() {
    return (
        <div className="preview-wrapper">
            <h4 className="preview-title">
                <FormattedMessage id="previewBar.header" defaultMessage="Preview"/>
            </h4>
            <button type="button" className="btn btn-primary preview-btn float-right">
                <FormattedMessage id="previewBar.button" defaultMessage="Preview Form"/>
            </button>
        </div>
    );
}