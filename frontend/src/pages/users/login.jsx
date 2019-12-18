import { ApolloProvider } from "react-apollo-hooks";
import { string } from "prop-types";
import { isBrowser } from "fogg-utils";

import useApolloClient from "@apollo-client";

import FormProvider from "@contexts/form";
import UserProvider from "@contexts/user";

import LoginLayout from "@users/components/Login/Layout";

const LoginPage = ({
    currentUrl = isBrowser() ? window.location.search.replace("?redirectTo=", "") : ""
}) => (
        <ApolloProvider client={useApolloClient()}>
            <UserProvider>
                <FormProvider initialValues={{ email: "", password: "" }}>
                    <LoginLayout currentUrl={currentUrl} />
                </FormProvider>
            </UserProvider>
        </ApolloProvider>
    );

LoginPage.propTypes = {
    currentUrl: string
};

export default LoginPage;