import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Home/>
                    </Route>
                    <Route exact path='/product'>
                        <Product/>
                    </Route>
                    <Route exact path='/about'>
                        <About/>
                    </Route>
                    <Route exact path='/contact'>
                        <Contact/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
