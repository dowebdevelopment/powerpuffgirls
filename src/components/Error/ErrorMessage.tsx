import React, { Component } from 'react';
import './ErrorMessage.scss';

interface IErrorMessageProps {
    message: string;
}

class ErrorMessage extends Component<IErrorMessageProps> {
    render() {
        return (
            <div className="error">
                <h1>Oops</h1>
                <p>Something went wrong</p>
                <p>
                    Reason:
                    <span className="error__reason">
                        {this.props.message}
                    </span>
                </p>
                <p>Please try again later</p>
            </div>
        );
    }
}

export default ErrorMessage;
