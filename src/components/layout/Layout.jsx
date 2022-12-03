import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../Header';
import classes from "./layout.module.scss"
const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className={classes.container}>{children}</main>
            <Outlet />
        </>
    )
}

Layout.propTypes = {}

export default Layout