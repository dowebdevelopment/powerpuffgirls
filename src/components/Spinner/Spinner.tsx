import React from 'react';
import { ClassicSpinner } from 'react-spinners-kit';
import './Spinner.scss';

function Spinner() {
    return (
        <div className="spinner">
            <ClassicSpinner size={30} color="#686769" loading={true} />
        </div>
    );
}

export default Spinner;
