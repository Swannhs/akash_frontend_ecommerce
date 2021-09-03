import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import {ToastContainer} from "react-toastify";

const Layout = props => {
    return (
        <>
            <ToastContainer/>
            <Header/>
            {props.children}
            <Footer/>
        </>
    );
};

export default Layout;
