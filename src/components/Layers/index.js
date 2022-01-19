import React from 'react';
import PoleApi from '../../api/pole/api';
import PointApi from '../../api/point/api';

const Layers = ({ children }) => {
    return (
        <div>
            Layer Here
            <PoleApi />
            <PointApi/>
        </div>
    );
}

export default Layers;
