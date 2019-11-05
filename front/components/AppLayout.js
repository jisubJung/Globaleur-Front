import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Layout, Menu, Button } from 'antd';

import LoginModal from './LoginModal';

const { Header, Content, Footer } = Layout;

const AppLayout = ({ children }) => {
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" style={{ width: '120px', height: '31px', background: 'rgba(255, 255, 255, 0.5)', margin: '16px 24px 16px 0', float: 'left' }}><Link href="/"><a style={{ display: 'block', width:'100%', height: '100%', 'lineHeight': '1',     fontSize: '30px' }}>LOGO</a></Link></div>

                <Menu mode="horizontal" style={{ lineHeight: '64px' }}>
                    <Menu.Item key="exploring"><Link href="/exploring"><a>Exploring</a></Link></Menu.Item>
                    <Menu.Item key="booking"><Link href="/booking"><a>Booking</a></Link></Menu.Item>
                    <Menu.Item key="planning"><Link href="/planning"><a>Planning</a></Link></Menu.Item>
                    <LoginModal />
                </Menu>
            </Header>

            <Content style={{ padding: '0 50px' }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    { children }
                </div>
            </Content>

            <Footer style={{ textAlign: 'center' }}>Globaleur ©2019 Allrights reserved.</Footer>
        </Layout>
    );
};

AppLayout.propTypes = {
    children : PropTypes.node,
};

export default AppLayout;