import React from "react";
import Head from "next/head";
import { string } from "prop-types";

import { UserContext } from "@contexts/user";

import Login from "./Login";

import styles from "./Layout.scss"

const Layout = ({ currentUrl }) => (
    <>
        <Head>
            <title>Login</title>
            <meta name="title" content="Login" />
        </Head>

        <UserContext.Consumer>
            {({ login }) => (
                <Login login={login} currentUrl={currentUrl} />
            )}
        </UserContext.Consumer>
    </>
)
export default Layout