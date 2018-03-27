import React,{Component} from 'react'
import { BrowserRouter as Router, Switch, Route, Link, HashRouter } from "react-router-dom";

import MappingLink from '../../shared'

function Children({match}){
	let listChildren = MappingLink.find(({name}) => name === match.params.id)
	console.log(listChildren)
	return(
		<div>
			<h2>{match.params.id}</h2>
			<ul>
				{listChildren.children.map((item)=>
					<li key={item.id}>
						<Link to={item.path}>{item.name}</Link>
					</li>
				)}	
			</ul>
			{
				listChildren.children.map((item)=>
					item.children
					?
					<Route key={item.id} path="/:id" component={Children}/>
					:
					<Route key={item.id} path={item.path} component={item.component}/>
				)
			}
		</div>
	)
}

function Navigation(){
	const listMenu = MappingLink
	return(
		<Router>
			<div>
				<ul>
					{listMenu.map((item)=>
						<li key={item.id}>
							<Link to={item.path}>{item.name}</Link>
						</li>
					)}
				</ul>
				{
					listMenu.map((item,index)=>
						item.exact === true
						?
						<Route key={item.id} exact path={item.path} component={item.component}/>
						:
						(
							item.children
							?
							<Route key={item.id} path="/:id" component={Children}/>
							:
							<Route key={item.id} path={item.path} component={item.component}/>
						)
						
					)
					
				}
			</div>
		</Router>
	)
}

// const Navigation = () => {
// 	const listNav = MappingLink
// 	return	(
// 		<Router>
// 			<div>
// 				<ul>
// 					{listNav.map((item,index)=>
// 						<li>
// 							<Link to={item.path}>{item.name}</Link>
// 						</li>
// 						)
// 					}
// 				</ul>
// 				<hr/>
// 				{listNav.map((item,index) => 
// 					index===0
// 					?
// 					<Route key={index} exact path={item.path} component={item.component} />
// 					:
// 					<Route key={index} path={item.path} component={item.component} />
// 				)}
// 			</div>
// 		</Router>
// 	)
// }

export default Navigation