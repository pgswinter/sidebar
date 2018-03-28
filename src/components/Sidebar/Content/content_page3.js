import React from 'react';
import {Route} from 'react-router-dom';
import SubContent1 from './Sub/sub_content1';
import SubContent2 from './Sub/sub_content2';
import SubContent3 from './Sub/sub_content3';

const ContentPage3 = ({match}) => {
	return (
		<div>
			<h2>Content Page 3</h2>
			<Route path={`${match.url}/1`} component={SubContent1}/>
			<Route path={`${match.url}/2`} component={SubContent2}/>
			<Route path={`${match.url}/3`} component={SubContent3}/>
		</div>
	)
}

export default ContentPage3