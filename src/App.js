import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css'
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserHistory } from '@remix-run/router';
const root = ReactDOM.createRoot(document.getElementById('root'));

{
    /**
     -Header
        -LOGO
        -NAVBAR
        - CART ICON
     - Body
        search bar
        restourent list
            restourent card
                -IMAGE
                -NAME
                -RATING
                -PRICE
                -COUSINE
    - footer
        -LINKS
        -COPYRIGHT
     */
}

const App =()=>{
    return (<>
    <Header />
    <Body />
    <Footer />
    </>)
}



root.render(<App />);  
