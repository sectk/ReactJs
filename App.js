import logo from './logo';
import './App.css';
import Kontak from './pages/Kontak';
import Nav from './pages/Nav';
import Sejarah from './pages/Sejarah';
import Tentang from './pages/Tentang';
import Home from './pages/Home';
import {BrowserRouter, Router, Switch } from "react-router-dom";

function App(){
    return (
        <BrowserRouter>
            <div className="App">
                <Nav />
                <Switch>
                    <Router path='/' component={Home} exact />
                    <Router path='/kontak' component={Kontak} />
                    <Router path='/sejarah' component={Sejarah} />
                    <Router path='/tentang' component={Tentang} />
                </Switch>
            </div>
        </BrowserRouter> 
    );
}
