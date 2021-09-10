import React, { useState } from 'react'
import './App.scss';
import {
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
	Link,
	useParams,
	useRouteMatch
} from "react-router-dom";
import PostDetail from './Pages/PostDetail'
import Posts from './Pages/Posts'
import CreatePost from './Pages/CreatePost'
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
									<Link className="nav-link" to="/new-post">New Post</Link>
								</NavItem>
								<NavItem>
									<Link className="nav-link" to="/post-detail/1231234123123">Post Detail</Link>
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
						<Posts />
					</Route>
					<Route path="/new-post">
						<CreatePost />
					</Route>
					<Route path="/post-detail/:slug">
						<PostDetail />
					</Route>
				</Switch>
			</Container>
		</Router>
	);
}

export default App;
