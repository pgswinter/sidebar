import React,{Component} from 'react'

const listData = {
	friends: [
		{
			id: 1,
			name: "Sarah"
		},
		{
			id: 2,
			name: "Joanna"
		},
		{
			id: 3,
			name: "Kim"
		}
	],
	selection: []
}

class ItemMenu extends Component{
	constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick( event ) {
		// Pass the mutation request for selection up to the parent.
		this.props.toggleSelection( this.props.friend );
	}
    render(){
    	const renderItem = this.props.isSelected 
		?
		(
			<li onClick={ this.handleClick }>
						<strong>{ this.props.friend.name }</strong>
						{ " " }
						&mdash; woot!
					</li>
		)
		:
		(
			<li onClick={ this.handleClick }>
				{ this.props.friend.name }
			</li>
		)
    	return(
    		renderItem
    	)
    }
}

class MenuBar extends Component {
	constructor(props) {
        super(props);
        this.state = listData
        this.toggleSelection = this.toggleSelection.bind(this)
    }

    // I toggle the selection of the given friend.
	toggleSelection( friend ) {
		var index = this.state.selection.indexOf( friend.id );
		console.log('index',index)
		console.log('friend.id',friend.id)
		var newSelection = this.state.selection.slice();
		// ItemMenu is not currently selected.
		if ( index === -1 ) {
			newSelection.push( friend.id );
		// ItemMenu is currently selected.
		} else {
			newSelection.splice( index, 1 );
		}
		this.setState({
			selection: newSelection
		});
		console.log('this.state',this.state)
	}

	isSelected( friend ) {
		return( this.state.selection.indexOf( friend.id ) !== -1 );
	}

    render(){
    	var friends = this.state.friends.map(
			function iterator( friend ) {
				return(
					<ItemMenu
						key={ friend.id }
						friend={ friend }
						isSelected={ this.isSelected( friend ) }
						toggleSelection={ this.toggleSelection }>
					</ItemMenu>
				);
			},
			this
		);
    	return(
    		<div>
				<h2>
					Friends
				</h2>
				<ul>
					{ friends }
				</ul>
			</div>
    	)
    }
}
export default MenuBar