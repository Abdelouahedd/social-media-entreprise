import React from 'react';
import SignIn from "./components/sign-in/signIn";
import './assets/css/animate.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/line-awesome.css'
import './assets/css/line-awesome-font-awesome.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './assets/lib/slick/slick.css'
import './assets/lib/slick/slick-theme.css'
import './assets/css/style.css'
import './assets/css/responsive.css'
import NavBar from "./components/NavBar/NavBar";

const App = () => {
    return (
        <div className="wrapper">
            <NavBar/>
        </div>
    );
};

export default App;
