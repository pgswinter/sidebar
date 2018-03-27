import React from 'react'
import {Route} from "react-router-dom";

import Home from '../Home';
import Sidebar from '../Sidebar';
import Sandwiches from '../Page/sandwiches'
import Bus from '../Page/bus'
import Car from '../Page/car'
import Tacos from '../Page/tacos'

const Navigation = () => (
	<div>
		<Route exact path="/" component={Home}/>
		<Route path="/sidebar" component={Sidebar}/>
		<Route path="/sandwiches" component={Sandwiches}/>
		<Route path="/tacos" component={Tacos}/>
	</div>
)

export default Navigation