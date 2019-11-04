import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Col, Input, Menu, Row } from 'antd';
import { useSelector } from 'react-redux';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';

const AppLayout = ({ children }) => {
	const { isLoggedIn } = useSelector(state => state.user);
	return (
		<div>
			<Menu mode='horizontal'>
				<Menu.Item key='home'>
					<Link href='/'>
						<a>Globaleur</a>
					</Link>
				</Menu.Item>
				<Menu.Item key='exploring'>
					<Link href='/exploring'>
						<a>Exploring</a>
					</Link>
				</Menu.Item>
				<Menu.Item key='booking'>
					<Link href='/booking'>
						<a>Booking</a>
					</Link>
				</Menu.Item>
				<Menu.Item key='planning'>
					<Link href='/planning'>
						<a>Planning</a>
					</Link>
				</Menu.Item>
				<Menu.Item key='profile'>
					<Link href='/profile'>
						<a>Profile</a>
					</Link>
				</Menu.Item>
				<Menu.Item key='search'>
					<Input.Search enterButton style={{ verticalAlign: 'middle' }} />
				</Menu.Item>
			</Menu>
			<Row>
				<Col xs={24} md={6}>
					{isLoggedIn ? <UserProfile /> : <LoginForm />}
				</Col>
            </Row>
            <Row>
				<Col xs={24} md={12}>
					{children}
				</Col>
            </Row>
            <Row>
				<Col xs={24} md={6}>
					테스트
				</Col>
			</Row>
		</div>
	);
};

AppLayout.propTypes = {
	children: PropTypes.node
};

export default AppLayout;
