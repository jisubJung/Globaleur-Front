import React from 'react';
import Link from 'next/link';

const Home = () => {
    return (
        <>
            <Link href="/about"><a>About Page</a></Link>
            <div>Hello, React!</div>
        </>
    );
};

export default Home;