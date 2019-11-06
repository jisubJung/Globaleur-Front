import React from 'react';
import { Button } from 'antd';
import { Input } from 'antd';
import Link from 'next/link';

const MainSlider = () => {
    return(
        <div className="main-slider-wrapper" style={{height: '461px', background: '#F6D8CE',textAlign:'center', position:'relative'}}>
            <div className="main-slider-contents" style={{position:'absolute', top:0, left:0, right:0, margin: '181px 0 auto'}}>
                <p style={{display:'block', lineHeight:'22px'}}>NORTH AMERICA</p>
                <p style={{display:'block', fontSize:'60px', lineHeight:'85px'}}>New York City</p>
                <div>
                    <Button type="primary">Explore</Button>
                </div>
            </div>
        </div>
    );
};


export default MainSlider;