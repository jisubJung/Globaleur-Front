import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Layout, Menu, Button } from 'antd';

import LoginModal from './LoginModal';
import { relative } from 'path';

const AppLayout = ({ children }) => {
    const { Header, Content, Footer } = Layout;

    return (
        <Layout className="layout" style={{position: 'relative'}}>
            <Header style={{position:'absolute', width: '100%'}}>
                <div className="logo" style={{ width: '120px', height: '31px', margin: '16px 24px 16px 0', float: 'left' }}>
                    <Link href="/"><a style={{ display: 'block', width:'100%', height: '100%', 'lineHeight': '1', fontSize: '30px' }}>LOGO</a></Link>
                </div>
                <Menu mode="horizontal" style={{ lineHeight: '64px' }}>
                    <Menu.Item key="exploring"><Link href="/exploring"><a>Exploring</a></Link></Menu.Item>
                    <Menu.Item key="booking"><Link href="/booking"><a>Booking</a></Link></Menu.Item>
                    <Menu.Item key="planning"><Link href="/planning"><a>Planning</a></Link></Menu.Item>
                    <LoginModal />
                </Menu>
            </Header>

            <Content style={{ padding: '0 50px'}}>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    { children }
                </div>
            </Content>

            <Footer style={{ textAlign: 'center'}}>
                <div className="footer-contents" style={{display: 'flex', justifyContent: 'space-between',textAlign: 'left', marginBottom: '35px'}}>
                    <div className="app-promotion" style={{width: '382px', background: '#fff'}}>
                        <p>
                            <span style={{fontWeight:800, display: 'inline-block', width: '100%'}}>Plan your trips in minutes!</span>
                            Passionate about traveling? Globaleur is a platform 
                            that helps travelers easily plan, book and share their 
                            trips and stories. Contact us to become our bloggers 
                            or Beta users!
                        </p>
                        <ul>
                            <li>instagram</li>
                            <li>twiter</li>
                            <li>facebook</li>
                        </ul> 
                    </div>
                    <div className="company-contents" style={{width: '163px', heigth: '139px', background: '#ff9944'}}>
                        <ul>
                            <li><Link href="#"><a>About</a></Link></li>
                            <li><Link href="#"><a>Contact</a></Link></li>
                            <li><Link href="#"><a>Career</a></Link></li>
                            <li><Link href="#"><a>Terms of Use & Disclaimer</a></Link></li>
                            <li><Link href="#"><a>Privacy & Cookie</a></Link></li>
                            <li><Link href="#"><a>Policy</a></Link></li>
                        </ul>
                    </div>
                    <div className="hotel-promotion" style={{width: '378px', background: '#ff4411'}}>
                        <p>
                            <span style={{width:'100%', display: 'inline-block'}}>The Best Deal on Hotels, Flights and Rental Cars! </span>
                            It’s coming soon! Globaleur proudly partnered 
                            with Priceline in selling deals on flights, 
                            hotels, rental cars and vacation packages! 
                            Book online or contact us to customize your trip 
                            and we could help you book your itineraries with the best value!
                        </p>
                        <ul>
                            <li><Link><a>Hotels</a></Link></li>
                            <li><Link><a>Flights</a></Link></li>
                            <li><Link><a>Rental Cars</a></Link></li>
                            <li><Link><a>Bundle Deals</a></Link></li>
                        </ul>
                    </div>
                    <div className="customer-contnets" style={{width: '123px', heigth: '139px', background: '#ffff98'}}>
                        <ul>
                            <li><Link href="#"><a>Customer Support</a></Link></li>
                            <li><Link href="#"><a>FAQ</a></Link></li>
                            <li><Link href="#"><a>Review / Cancel</a></Link></li>
                            <li><Link href="#"><a>Reservations</a></Link></li>
                            <li><Link href="#"><a>Privacy Policy</a></Link></li>
                            <li><Link href="#"><a>Terms & Conditions</a></Link></li>
                        </ul>
                    </div>
                </div>
                <address>
                    © 2019 by MG Innovation Lab, Inc. All Rights Reserved.
                </address>
            </Footer>
        </Layout>
    );
};

AppLayout.propTypes = {
    children : PropTypes.node,
};

export default AppLayout;