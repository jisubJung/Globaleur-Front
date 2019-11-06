import React from 'react';

const TripType = () => {
    return(
        <>
            <div className="trip-type">
                <span className="frame" style={{display:'inline-block', background: '#5858FA' , width:'85px', height:'85px', borderRadius:'43px'}}>
                </span>
                <p style={{display:'inline-block', width: '204px'}}>
                    <span style={{width:'100%', display: 'inline-block'}}>Discover</span>
                    Read comprehensive travel content 
                    from travel data publishers and travel 
                    blogs created by local experts
                </p>
            </div>
            <div className="trip-type">
                <span className="frame" style={{display:'inline-block', background: '#5858FA' , width:'85px', height:'85px', borderRadius:'43px'}}>
                </span>
                <p style={{display:'inline-block', width: '204px'}}>
                    <span style={{width:'100%', display: 'inline-block'}}>Recommendation</span>
                    In-house recommendation engine helps you quickly identify your preferred tour activities
                </p>
            </div>
            <div className="trip-type">
                <span className="frame" style={{display:'inline-block', background: '#5858FA' , width:'85px', height:'85px', borderRadius:'43px'}}>
                </span>
                <p style={{display:'inline-block', width: '204px'}}> 
                    <span style={{width:'100%', display: 'inline-block'}}>Optimization</span>
                    Optimize your day-to-day travel 
                    schedule by integrating multiple 
                    travel factors such as opening hours
                </p>
            </div>
        </>
    );
};

export default TripType;