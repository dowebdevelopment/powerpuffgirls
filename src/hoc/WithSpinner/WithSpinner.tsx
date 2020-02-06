import React from 'react';
import Spinner from '../../components/Spinner/Spinner';

interface IWithSpinnerProps {
    isLoading: boolean;
    [key: string]: any
}

const withSpinner = (WrappedComponent: any) => ({ isLoading, ...props }: IWithSpinnerProps) => {
    if (isLoading) {
        return <Spinner></Spinner>
    }
    return <WrappedComponent {...props}></WrappedComponent>;
};

export default withSpinner;
