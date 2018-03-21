import React,{Component} from 'react'
import { BrowserRouter as Router, Switch, Route, HashRouter } from "react-router-dom";
import Home from '../Home/';
import Sidebar from '../Sidebar'

class ModalSwitch extends Component {
	previousLocation = this.props.location;

	render(){
		return(
			<div>
				<Switch>
					<Route path="/main" component={Sidebar} />
					<Route exact path="/" component={Home} />
				</Switch>
			</div>
		)
	}
}

const Navigation = () => (
	<Router>
		<Route component={ModalSwitch} />
	</Router>
);

export default Navigation