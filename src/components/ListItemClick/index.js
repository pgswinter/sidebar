import React,{Component} from 'react'

const listData = [
	{
		id: 0,
		value: 'lorem 0'
	},
	{
		id: 1,
		value: 'lorem 1'
	},
	{
		id: 2,
		value: 'lorem 2'
	},
	{
		id: 3,
		value: 'lorem 3'
	},
	{
		id: 4,
		value: 'lorem 4'
	},

]

const MenuItem = ({onClick, text, active}) => {
	return (
	    <button
	    	onClick={onClick} 
	    	style={active? {color: 'red'} : null}
	    	className={active ? 'open': null}
	    >{text}</button>
	);
}
class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {activeIndex: 0};
    }
    handleItemClick(index) {
        this.setState({activeIndex: index});
    }
    render() {
        var activeIndex = this.state.activeIndex;
        return <div>
            {
                this.props.buttons.map(
                    (btn, i) => (
                        <MenuItem
                            active={activeIndex === i}
                            key={i}
                            onClick={this.handleItemClick.bind(this, i)}
                            text={btn} />
                    )
                )
            }
        </div>
    }
}
// class ListItemClick extends Component{
// 	constructor(props){
// 		super(props)
// 		this.state = {
// 			activeIndex: 0
// 		}
// 	}
// 	onItemClick(item, e) {  
// 	  console.log(item);
// 	}
// 	render(){
// 		return(
// 			<ul className="list">
// 				{listData.map((item) => {
// 						let boundItemClick = this.onItemClick.bind(this, item); 
// 						return <li key={item.id} onClick={boundItemClick}>{item.value}</li>
// 					}
// 				)}
// 			</ul>
// 		)
// 	}
// }

export default MenuBar