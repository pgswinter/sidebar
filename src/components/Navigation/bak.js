import React,{Component} from 'react'
import { BrowserRouter as Router, Switch, Route, Link, HashRouter } from "react-router-dom";

import Sidebar from '../Sidebar'
import RouteConfigExample from '../Sidebar/index_another'

import MappingLink from '../../shared'

const Navigation = () => {
	const listNav = MappingLink
	return	(
		<Router>
			<div>
				{listNav.map((item,index) => 
					index===0
					?
					<Route key={index} exact path={item.path} component={item.component} />
					:
					<Route key={index} path={item.path} component={item.component} />
				)}
			</div>
		</Router>
	)
}
// const Navigation = () => (
// 	<Router>
// 		<Route component={ModalSwitch} />
// 	</Router>
// );

export default Navigation

// import React,{Component} from 'react'
// import { BrowserRouter as Router, Switch, Route, Link, HashRouter } from "react-router-dom";

// import Sidebar from '../Sidebar'
// import RouteConfigExample from '../Sidebar/index_another'

// import MappingLink from '../../shared'

// const Navigation = () => {

// 	const map = MappingLink
// 	return	(
// 		<Router>
// 			<div>
// 				<Route exact path="/" component={Home} />
// 				<Route path="/sandwiches" component={Sandwiches} />
// 				<Route path="/bus" component={Bus} />
// 				<Route path="/car" component={Car} />
// 				<Route path="/tacos" component={Tacos} />				
// 			</div>
// 		</Router>
// 	)
// }
// // const Navigation = () => (
// // 	<Router>
// // 		<Route component={ModalSwitch} />
// // 	</Router>
// // );

// export default Navigation