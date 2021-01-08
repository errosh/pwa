import "./App.css";
import { Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import Product from "./component/Product";
import Contactus from "./component/Contactus";
import Users from "./component/Users";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link id="home" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link id="product" to="/product">
                Product
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link id="contactus" to="/contactus">
                Contact Us
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link id="users" to="/users">
                Users
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar>
        <Route path="/" component={Home} exact></Route>
        <Route path="/product" component={Product}></Route>
        <Route path="/contactus" component={Contactus}></Route>
        <Route path="/users" component={Users}></Route>
      </Router>
    </div>
  );
}

export default App;
