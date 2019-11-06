import React from 'react';
import Link from 'next/link';

const PopularDestinations = () => {
    return(
        <>
            <h2>Popular Destinations</h2>
            <div className="destinations-slider-wrapper" style={{display:'flex', justifyContent: 'space-between'}}>
                <span className="frame" style={{display:'inline-block', width: '271.9px', height: '240px', background: '#FA5858'}}>
                </span>
                <span className="frame" style={{display:'inline-block', width: '271.9px', height: '240px', background: '#FA5858'}}>
                </span>
                <span className="frame" style={{display:'inline-block', width: '271.9px', height: '240px', background: '#FA5858'}}>
                </span>
                <span className="frame" style={{display:'inline-block', width: '271.9px', height: '240px', background: '#FA5858'}}>
                </span>
            </div>
        </>
    );
};

export default PopularDestinations;