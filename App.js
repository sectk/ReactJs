import logo from './logo';
import './App.css';
import Kontak from './pages/Kontak';
import Nav from './pages/Nav';
import Sejarah from './pages/Sejarah';
import Tentang from './pages/Tentang';
import Home from './pages/Home';

function App(){
    return (
        <div className="App">
        <Nav />
        <Home />
        <Kontak />
        <Sejarah />
        <Tentang />
        </div>
    )
}
