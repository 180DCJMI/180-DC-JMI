import React from 'react';
import Top from "./top";
import Footer from "./Footer";
import Body from './Body';
import Blog from './Blog';
import Aboutus from './Aboutus';
import EmailForm from './Emailform';

function App(){

    return (
        <div>
       <Top/>
       <Aboutus/>
       <Blog/>
       <Body/>
       <EmailForm/>
       <Footer/>
        </div>
    )

}
export default App;