import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import AppLayout from '../components/AppLayout';

const Globaleur = ({ Component }) => {
    return (
        <>
            <Head>
                <title>Globaleur</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.css" />
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </>
    );
};

Globaleur.propTypes = {
    Component: PropTypes.elementType,
};

export default Globaleur;

/*=========================
next 자동전체 레이아웃 _app.js
=========================*/