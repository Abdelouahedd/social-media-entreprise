import React, { Suspense } from 'react';
import './assets/css/animate.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/line-awesome.css'
import './assets/css/line-awesome-font-awesome.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './assets/lib/slick/slick.css'
import './assets/lib/slick/slick-theme.css'
import './assets/css/style.css'
import './assets/css/responsive.css'
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Root from "./components/root";
import SpinnerLoad from "./components/shared/spinner/SpinnerLoad";
import Authentification from './components/authentification/authentification';
import store from './redux/store/store';
import { Provider } from 'react-redux'

const App = () => {
    return (
        <Provider store={store}>
            <Suspense fallback={<SpinnerLoad />}>
                <BrowserRouter>
                    <Switch>
                        <Route path='/sign' component={Authentification} />
                        <Route path='/' component={Root} />
                    </Switch>
                </BrowserRouter>
            </Suspense>
        </Provider>

    );
};

export default App;
