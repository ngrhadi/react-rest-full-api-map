import React from 'react';
import UserApi from '../../api/users/api';
import PointApi from '../../api/point/api';

const Layers = ({ children }) => {
    return (
        <div>
            Layer Here
            <UserApi />
            <PointApi/>
        </div>
    );
}

export default Layers;
