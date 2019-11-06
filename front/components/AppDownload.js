import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';


const AppDownload = () => {
    return(
        <section className="app-download" style={{background: '#efefef', height: 349, display:'flex', margin: '35 0'}}>
            <div className="app-download-contents">
                <span style={{fontSize:'26px', display:'inline-block', width:'480px'}}>Customize your trip and make it mobile. Download the mobile app now!</span>
                <ul>
                    <li>
                        <Link href="#"><a>AppStore</a></Link>
                    </li>
                    <li>
                        <Link href="#"><a>Google play</a></Link>
                    </li>
                </ul>
            </div>
            <img src="#"></img>
        </section>
    );
};

export default AppDownload;