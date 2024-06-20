// src/components/DataComponent.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/dataActions';

const DataComponent = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Data Component</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default DataComponent;
