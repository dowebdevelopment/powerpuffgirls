import React, { Component } from 'react';
import { connect } from 'react-redux';
import ErrorMessage from '../../components/Error/ErrorMessage';

interface ILayoutProps {
    error: string;
}

class Layout extends Component<ILayoutProps> {
    render() {
        let error = null;
        if (this.props.error) {
            error = <ErrorMessage message={this.props.error}/>;
        }

        return (
            <div className="app">
                {error ? error : this.props.children}
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        error: state.error.message
    }
};

export default connect(mapStateToProps)(Layout);
