import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Layout, Menu } from 'antd';

import LoginModal from './LoginModal';
import FooterSection from './FooterSection';

const AppLayout = ({ children }) => {
    const { Header, Content, Footer } = Layout;

    return (
        <Layout className="layout" style={{position: 'relative'}}>
            <Header style={{position:'absolute', width: '100%', zIndex:'9999', background: 'rgba( 255, 255, 255, 0 )'}}>
                <div className="logo" style={{ width: '120px', height: '31px', margin: '16px 24px 16px 0', float: 'left' }}>
                    <Link href="/"><a style={{ display: 'block', width:'100%', height: '100%', 'lineHeight': '1', fontSize: '30px' }}>LOGO</a></Link>
                </div>
                <Menu mode="horizontal" style={{ lineHeight: '64px', background: 'none', borderBottom: '0px'}}>
                    <Menu.Item key="exploring"><Link href="/exploring"><a>Exploring</a></Link></Menu.Item>
                    <Menu.Item key="booking"><Link href="/booking"><a>Booking</a></Link></Menu.Item>
                    <Menu.Item key="planning"><Link href="/planning"><a>Planning</a></Link></Menu.Item>
                    <LoginModal />
                </Menu>
            </Header>

            <Content style={{ padding: '0'}}>
                <div style={{ background: '#fff', padding: 0, minHeight: 280 }}>
                    { children }
                </div>
            </Content>

            <Footer style={{ textAlign: 'center', padding: 73.5}}>
                <FooterSection/>
            </Footer>
        </Layout>
    );
};

AppLayout.propTypes = {
    children : PropTypes.node,
};

export default AppLayout;