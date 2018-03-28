import React,{Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import ContentPage1 from './Content/content_page1';
import ContentPage2 from './Content/content_page2';
import ContentPage3 from './Content/content_page3';

import SubContent1 from './Content/Sub/sub_content1';
import SubContent2 from './Content/Sub/sub_content2';
import SubContent3 from './Content/Sub/sub_content3';

const routes = [
	{
		id: 1,
		name: 'ContentPage1',
		component: ContentPage1,
		path: 'cp1',
		exact: true
	},
	{
		id: 2,	
		name: 'ContentPage2',
		component: ContentPage2,
		path: 'cp2'
	},
	{
		id: 3,
		name: 'ContentPage3',
		component: ContentPage3,
		path: 'cp3',
		children:[
			{
				id: 1,
				name: 'SubContentPage1',
				component: SubContent1,
				path: '1'
			},
			{
				id: 2,
				name: 'SubContentPage2',
				component: SubContent2,
				path: '2'
			},
			{
				id: 3,
				name: 'SubContentPage3',
				component: SubContent3,
				path: '3'
			}
		]
	}
]

class ItemNavs extends Component{
	constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick( event ) {
		this.props.toggleSelection( this.props.item );
	}
	render(){
    	const renderItem = this.props.item.children
    	?
    	(
    		this.props.isSelected
    		?
    		(
    			<li>
    				<a onClick={ this.handleClick } href="javascript:void(0)">{this.props.item.name}</a>
    				<ul style={this.props.styleDisplay}>
						{this.props.item.children.map((subItem,index)=>
							<li key={index}>
								<a href={`${this.props.match.url}/${this.props.item.path}/${subItem.path}`}>{subItem.name}</a>
							</li>
						)}	
					</ul>
    			</li>
    		)
    		:
    		(
    			<li>
    				<a onClick={ this.handleClick } href="javascript:void(0)">{this.props.item.name}</a>
    				<ul style={this.props.styleHidden}>
						{this.props.item.children.map((subItem,index)=>
							<li key={index}>
								<a href={`${this.props.match.url}/${this.props.item.path}/${subItem.path}`}>{subItem.name}</a>
							</li>
						)}	
					</ul>
    			</li>
    		)
    	)
    	:
    	(
    		<li key={this.props.index}>
    			<a href={`${this.props.match.url}/${this.props.item.path}`}>{this.props.item.name}</a>
    		</li>
    	)
    	return(
    		renderItem
    	)
    }
}

class SideBar extends Component{
	constructor(props){
		super(props)
		this.state = {
			routes,
			selection: []
		}
		this.toggleSelection = this.toggleSelection.bind(this)
		this.isSelected = this.isSelected.bind(this)
	}

	toggleSelection( item ) {
		var index = this.state.selection.indexOf( item.id );
		console.log('index',index)
		console.log('item.id',item.id)
		var newSelection = this.state.selection.slice();
		// ItemMenu is not currently selected.
		if ( index === -1 ) {
			newSelection.push( item.id );
		// ItemMenu is currently selected.
		} else {
			newSelection.splice( index, 1 );
		}
		this.setState({
			selection: newSelection
		});
		console.log('this.state',this.state)
	}

	isSelected( item ) {
		return( this.state.selection.indexOf( item.id ) !== -1 );
	}

	render(){
		const match = this.props.match
		let styleHidden = {
			listStyleType: 'none',
			paddingLeft: '0em',
			display: 'none'
		}
		let styleDisplay = {
			listStyleType: 'none',
			paddingLeft: '0em',
			display: 'block'
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
		var navs = this.state.routes.map(
			function iterator(item,index){
				return(
					<ItemNavs
						key={item.id}
						item={item}
						styleHidden={styleHidden}
						styleDisplay={styleDisplay}
						match={match}
						isSelected={this.isSelected(item)}
						toggleSelection={this.toggleSelection}
					/>
				)
			},this
		)
		return(
			<div>
				<div className="menu-left" style={styleLeft}>
					<ul style={{listStyleType: 'none'}}>
						{navs}
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
}

// const SideBar = ({match}) => {
// 	let style = {
// 		listStyleType: 'none',
// 		paddingLeft: '0em',
// 		display: 'none'
// 	}
// 	let styleLeft={
// 		float: 'left',
// 		width: '20%',
// 		border: '1px solid #000',
// 		borderBox: 'box-sizing'
// 	}
// 	let styleRight={
// 		float: 'left',
// 		width: '79%',
// 		borderBox: 'box-sizing'
// 	}
// 	let this.state = {
// 		selection: []
// 	}
// 	const handleToggleClick = (itemIndex) => {
// 		// Check exist id in [selection] array
// 		let toggleNumber = this.state.selection.indexOf(itemIndex)
// 		console.log('toggleNumber',toggleNumber)
// 		console.log('itemIndex',itemIndex)
// 		// Clone new [selection] array.
// 		// * Note: slice clone from current postion to bigger
// 		var newSelection = this.state.selection.slice();
// 		console.log('newSelection',newSelection)
// 		// If none exist id, add that id to [selection] array
// 		if(toggleNumber === -1){
// 			newSelection.push(itemIndex)
// 		}
// 		// Else existed id, remove it out [selection] array
// 		// * Note: splice is used to changes contents of array,
// 		// ex: -1 is position will be removed and calculated from right to left
// 		else{
// 			newSelection.splice(toggleNumber,1)
// 		}
// 		this.state = {
// 			selection: newSelection
// 		}
// 		console.log('this.state',this.state)
// 	}
// 	function isSelected(itemIndex){
// 		return(
// 			this.state.selection.indexOf(itemIndex) !== -1
// 		)
// 	}
// 	let navs = routes.map(
// 		function renderItem(item,index){
// 			return(
// 				<li onClick={()=>handleToggleClick(index)}>{isSelected(index).toString()}</li>
// 			)
// 		},this
// 	)

// 	return(
// 		<div>
// 			<div className="menu-left" style={styleLeft}>
// 				<ul style={{listStyleType: 'none'}}>
// 					{/*<li>
// 						<a href={`${match.url}/cp1`}>ContentPage1</a>
// 					</li>
// 					<li>
// 						<a href={`${match.url}/cp2`}>ContentPage2</a>
// 					</li>
// 					<li>
// 						<a href={`${match.url}/cp3`}>ContentPage3</a>
// 						<ul style={style}>
// 							<li>
// 								<a href={`${match.url}/cp3/1`}>Sub Content 1</a>
// 							</li>
// 							<li>
// 								<a href={`${match.url}/cp3/2`}>Sub Content 2</a>
// 							</li>
// 							<li>
// 								<a href={`${match.url}/cp3/3`}>Sub Content 3</a>
// 							</li>
// 						</ul>
// 					</li>*/}
// 					{/*routes.map((item, index)=>
// 						item.children
// 						?
// 						<li key={index}><a href={`${match.url}/${item.path}`}>{item.name}</a></li>
// 						:
// 						<li key={index} onClick={isSelected.bind(this)}>
// 							<a href={`${match.url}/${item.path}`}>{item.name}</a>
// 							<ul style={style}>
// 								<li>
// 									<a href={`${match.url}/cp3/1`}>Sub Content 1</a>
// 								</li>
// 								<li>
// 									<a href={`${match.url}/cp3/2`}>Sub Content 2</a>
// 								</li>
// 								<li>
// 									<a href={`${match.url}/cp3/3`}>Sub Content 3</a>
// 								</li>
// 							</ul>
// 						</li>
// 					)*/}
// 					{navs}	
// 				</ul>
// 			</div>
// 			<div className="content-sidebar" style={styleRight}>
// 				<Switch>
// 					<Route exact path={`${match.url}/cp1`} component={ContentPage1}/>
// 					<Route path={`${match.url}/cp2`} component={ContentPage2}/>
// 					<Route path={`${match.url}/cp3`} component={(props) => <ContentPage3 {...props} previousMatch={match}/>}/>	
// 				</Switch>
// 			</div>
// 			<div className="clear" style={{clear: 'both'}}></div>
// 		</div>
// 	)
// }

export default SideBar;