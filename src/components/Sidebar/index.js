import React from 'react';
import {Route, Switch} from 'react-router-dom';

import ContentPage1 from './Content/content_page1';
import ContentPage2 from './Content/content_page2';
import ContentPage3 from './Content/content_page3';

const SideBar = ({match}) => {
	let style = {
		listStyleType: 'none',
		paddingLeft: '0em'
	}
	let styleLeft={
		float: 'left',
		width: '20%',
		border: '1px solid #000',
		borderBox: 'box-sizing'
	}
	let styleRight={
		float: 'left',
		width: '79%',
		borderBox: 'box-sizing'
	}

	return(
		<div>
			<div className="menu-left" style={styleLeft}>
				<ul style={{listStyleType: 'none'}}>
					<li>
						<a href={`${match.url}/cp1`}>ContentPage1</a>
					</li>
					<li>
						<a href={`${match.url}/cp2`}>ContentPage2</a>
					</li>
					<li>
						<a href={`${match.url}/cp3`}>ContentPage3</a>
						<ul style={style}>
							<li>
								<a href={`${match.url}/cp3/1`}>Sub Content 1</a>
							</li>
							<li>
								<a href={`${match.url}/cp3/2`}>Sub Content 2</a>
							</li>
							<li>
								<a href={`${match.url}/cp3/3`}>Sub Content 3</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<div className="content-sidebar" style={styleRight}>
				<Switch>
					<Route exact path={`${match.url}/cp1`} component={ContentPage1}/>
					<Route path={`${match.url}/cp2`} component={ContentPage2}/>
					<Route path={`${match.url}/cp3`} component={(props) => <ContentPage3 {...props} previousMatch={match}/>}/>	
				</Switch>
			</div>
			<div className="clear" style={{clear: 'both'}}></div>
		</div>
	)
}

export default SideBar;