import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, HashRouter } from "react-router-dom";

import MappingLink from '../../shared'

const Tacos = ({match}) => {
	console.log('match: ',match)
	let listTacos = MappingLink.find(({name})=> name === match.params.id_menu)
	console.log('listTacos: ',listTacos)
	return(
		<div>
			<ul>
				{
				listTacos.children
				?
				(listTacos.children.map((item,index)=>
					<li key={index}>
						<Link to={`${match.url}/${item.name}`}></Link>
						<Route key={index} path={`${match.url}/:tacoId`} component={Taco}/>
					</li>
				))
				:null
				}
			</ul>
			<Route exact path={match.url} render={()=><h3>Select the fuck anything you want!</h3>}/>
		</div>
	)
}

// const Tacos = ({match}) => (
// 	<div>
// 		<ul>
// 			<li>
// 				<Link to={`${match.url}/car`}>Car</Link>
// 			</li>
// 			<li>
// 				<Link to={`${match.url}/bus`}>Bus</Link>
// 			</li>
// 		</ul>
// 		<Route path={`${match.url}/:tacoId`} component={Taco}/>
// 		<Route exact path={match.url} render={()=><h3>Select the fuck anything you want!</h3>}/>
// 	</div>
// )

const Taco = ({match}) => (
	<div>
		<h3>{match.params.tacoId}</h3>
	</div>
)

export default Tacos