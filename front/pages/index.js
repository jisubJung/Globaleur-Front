import React from 'react';
import { Button } from 'antd';
import { Input } from 'antd';
import Link from 'next/link';

import MainSlider from '../components/MainSlider';
import SearchBar from '../components/SearchBar';
import AppDownload from '../components/AppDownload';
import PopularDestinationsSection from '../components/PopularDestinationsSection';
import TrendingTripsSection from '../components/TrendingTripsSection';

const { Search } = Input;

const Home = () => {
	return (
		<div>
			<MainSlider />
			<SearchBar></SearchBar>
			<hr/>
			<div className="section-contents" style={{padding: 72}}>
				<section style={{marginBottom: 35}}>
					<PopularDestinationsSection/>
					<TrendingTripsSection/>
				</section>
				<AppDownload/>
			</div>
			<hr/>
		</div>
	);
};

export default Home;
