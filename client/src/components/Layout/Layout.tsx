import React, {FC} from 'react';
import MetaTitle from "../MetaTitle/MetaTitle";
// @ts-ignore
import styles from "./Layout.module.scss";
import getThemedStyles from "./getThemedStyles";
import Header from "../Header/Header";

interface props {
    pageTitle : string
}

const Layout : FC<props> = ({pageTitle}) => {
    const userTheme = 0;
    const theme = getThemedStyles(userTheme, styles);

    return (
        <div className={`${styles.layout} ${theme}`}>
            <Header pageTitle={pageTitle} />
        </div>
    );
};

export default Layout;