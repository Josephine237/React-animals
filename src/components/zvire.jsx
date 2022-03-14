import React from 'react';
import './style.css';

const Animal = ({name, spiecies}) => {
    return (
        <div className="animal" >
            <img src={`/assets/${spiecies}`} alt={spiecies} />
            <p>{name}</p>
        </div>

    );
};


export default Animal;
