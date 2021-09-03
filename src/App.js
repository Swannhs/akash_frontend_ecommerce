import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ProductDetails from "./Pages/ProductDetails";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Home/>
                    </Route>
                    <Route exact path='/product/:id'>
                        <ProductDetails/>
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
