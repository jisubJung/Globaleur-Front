import React from 'react';
import { Button } from 'antd';
import { Input } from 'antd';
import Link from 'next/link';


const { Search } = Input;

const Home = () => {
	return (
		<>
			<div className="slider-wrapper" style={{height: '461px', background: '#F6D8CE',textAlign:'center'}}>
				<span style={{display:'block', lineHeight:'22px'}}>NORTH AMERICA</span>
				<span style={{display:'block', fontSize:'60px', lineHeight:'85px'}}>New York City</span>
				<div>
					<Button type="primary">Explore</Button>
				</div>
			</div>
			<div style={{textAlign:'center'}}>
				<Search placeholder="Got any place in mind?" onSearch={value => console.log(value)} enterButton style={{width:'748px', height:'52px'}}/>
			</div>
			<hr/>
			
			<section style={{}}>
				<div className="trip-type-wrapper" style={{display: 'flex', justifyContent: 'space-between'}}>
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
				</div>
				<div className="popular-destinations" style={{marginBottom: '35px'}}>
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
				</div>
				<div className="trending-trips">
					<h2>Trending Trips in New York</h2>
					<div className="treding-trips-slider-wrapper" style={{height: '430px', background: '#819FF7'}}>
						Nov 22 - Nov 27, 2018<br/>
						6 days Trip in New York
						<div>
							<Button type="primary">Explore trip detail</Button>
						</div>
						<Link href="#"><a><img src="#" style={{width:'176px', height:'120px'}}></img></a></Link>
						<Link href="#"><a><img src="#" style={{width:'176px', height:'120px'}}></img></a></Link>
						<Link href="#"><a><img src="#" style={{width:'176px', height:'120px'}}></img></a></Link>
						<Link href="#"><a><img src="#" style={{width:'176px', height:'120px'}}></img></a></Link>
						<Link href="#"><a><img src="#" style={{width:'176px', height:'120px'}}></img></a></Link>
					</div>
				</div>
			</section>

			<section className="app-download" style={{background: '#F5A9E1', height: '349px', display:'flex'}}>
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
			<hr/>
		</>
	);
};

export default Home;
