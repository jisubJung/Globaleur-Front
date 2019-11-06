import React from 'react';
import Link from 'next/link';


const FooterSection = () => {
    return(
        <>
        <div className="footer-contents" style={{display: 'flex', justifyContent: 'space-between',textAlign: 'left', marginBottom: '35px'}}>
            <div className="app-promotion" style={{width: '382px'}}>
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
            <div className="company-contents" style={{width: '163px', heigth: '139px'}}>
                <ul>
                    <li><Link href="#"><a>About</a></Link></li>
                    <li><Link href="#"><a>Contact</a></Link></li>
                    <li><Link href="#"><a>Career</a></Link></li>
                    <li><Link href="#"><a>Terms of Use & Disclaimer</a></Link></li>
                    <li><Link href="#"><a>Privacy & Cookie</a></Link></li>
                    <li><Link href="#"><a>Policy</a></Link></li>
                </ul>
            </div>
            <div className="hotel-promotion" style={{width: '378px'}}>
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
            <div className="customer-contnets" style={{width: '123px', heigth: '139px'}}>
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
        </>
    );
};

export default FooterSection;