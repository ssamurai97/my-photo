
import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import GlobalStyles from "./styles/GlobalStyles";

export default function Layout({children}){
    return(
        <>
            <GlobalStyles />
            <Nav/>
            {children}
            <Footer/>
        </>
    )

}
