import React,{Component} from 'react'
import { BrowserRouter as Router, Switch, Route, Link, HashRouter } from "react-router-dom";

import MappingLink from '../../shared'

// import Home from '../Home/';
// import Sandwiches from '../Page/sandwiches'
// import Bus from '../Page/bus'
// import Car from '../Page/car'
// import Tacos from '../Page/tacos'

function Navigation(){
	const listMenu = MappingLink
	return(
		<Router>
			<div>
				<ul>
					{listMenu.map((item,index) =>
						<li key={index}>
							<Link to={item.path}>{item.name}</Link>
						</li>
					)}
				</ul>
				{listMenu.map((item, index)=>
					item.name === 'home'
					?
					<Route key={index} exact path="/" component={item.component}/>
					:
					<Route key={index} path="/:id_menu" component={item.component}/>
				)}
			</div>
		</Router>
	)	
}

// function Navigation (){
// 	return(
// 		<Router>
// 			<div>
// 				<ul>
// 					<li>
// 						<Link to="/">Home</Link>
// 					</li>
// 					<li>
// 						<Link to="/sandwiches">Sandwiches</Link>
// 					</li>
// 					<li>
// 						<Link to="/tacos">Tacos</Link>
// 					</li>
// 				</ul>
// 				<Route exact path="/" component={Home} />
// 				<Route path="/sandwiches" component={Sandwiches} />
// 				<Route path="/tacos" component={Tacos} />
// 			</div>
// 		</Router>
// 	)
// }

export default Navigation