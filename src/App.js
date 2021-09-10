import React, { useState } from 'react'
import './App.scss';
import {
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Collapse,
  NavbarToggler,
  Container
} from 'reactstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
   const links = [
    {
      label: "Catálogo",
      path: ""
    },
    {
      label: "Crear producto",
      path: "create-product"
    },
    {
      label: "Carrito de compras",
      path: "shopping-cart"
    }
  ]
  return (
    <Router>
    <div>
        <Navbar color="light" light expand="sm">
            <Container>
              <Link className="navbar-brand" to="/">Home</Link>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                      <Link className="nav-link" to="/new-posts">New Post</Link>
                  </NavItem>
                  <NavItem>
                    <Link className="nav-link" to="/post-detail">Post Detail</Link>
                  </NavItem>
                  </Nav>
                </Collapse>
            </Container>
            
      </Navbar>
      
  </div>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}

        <Container>
          <Switch>
            <Route exact path="/">
              <h1>Home</h1>
            </Route>
            <Route path="/new-posts">
              <h1>New Post</h1>
            </Route>
            <Route path="/post-detail">
              <h1>Post Detail</h1>
            </Route>
          </Switch>
        </Container>
    </Router>
  );
}

export default App;
