import React from 'react';
import { Button } from 'antd';

const TrendingTrips = () => {
    return(
        <>
            <h2>Trending Trips in New York</h2>
            <div className="treding-trips-slider-wrapper" style={{height: 430, background: '#819FF7', position:'relative'}}>
                <div className="trip-planner" style={{poisition:'absolute', left: 20, top: 30}}>
                    <div style={{display:'inline-block', width:23, height:23, borderRadius: 12, background:'red'}}></div>
                    <p>Jason chen</p>
                </div>
                <div className="treding-trips-slider-contents" style={{textAlign:'center', marginBottom: 20}}> 
                    <p style={{fontSize:12, lineHeight:'20px'}}>Nov 22 - Nov 27, 2018</p><br/>
                    <p style={{fontSize: 24, lineHeight: '28px'}}>6 days Trip in New York</p>
                    <div>
                        <Button type="primary">Explore trip detail</Button>
                    </div>
                </div>
                <div style={{width: 944, margin:'0 auto'}}>
                    <span style={{display:'inline-block', width:176, height:120, marginRight:16, background:'#fff'}}>img</span>
                    <span style={{display:'inline-block', width:176, height:120, marginRight:16, background:'#fff'}}>img</span>
                    <span style={{display:'inline-block', width:176, height:120, marginRight:16, background:'#fff'}}>img</span>
                    <span style={{display:'inline-block', width:176, height:120,  background:'#fff'}}>img</span>
                    <span style={{display:'inline-block', width:176, height:120, background:'#fff'}}>img</span>
                    {/* <Link href="#"><a><img src="#" style={{width:'176px', height:'120px'}}></img></a></Link>
                    <Link href="#"><a><img src="#" style={{width:'176px', height:'120px'}}></img></a></Link>
                    <Link href="#"><a><img src="#" style={{width:'176px', height:'120px'}}></img></a></Link>
                    <Link href="#"><a><img src="#" style={{width:'176px', height:'120px'}}></img></a></Link>
                    <Link href="#"><a><img src="#" style={{width:'176px', height:'120px'}}></img></a></Link> */}
                </div>
            </div>
        </>
    );
};

export default TrendingTrips;