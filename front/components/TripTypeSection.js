import React from 'react';

import TripType from './TripType';

const TripTypeSection = () => {
    return (
        <div className="trip-type-wrapper" style={{display: 'flex', justifyContent: 'space-between'}}>
            <TripType/>
        </div>
    );
};

export default TripTypeSection;