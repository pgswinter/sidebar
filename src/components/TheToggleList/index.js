import React,{Component} from 'react'

class MyList extends Component{
  constructor(props){
    super(props);

    this.state={
      data: ['foo', 'bar', 'baz'],
      selected: null
    }
    this.renderItem = this.renderItem.bind(this)
  }

  selectItem(el){
    this.setState({selected: el});
  }

  renderItem(el){
    var className = this.state.selected === el ? 'active' : 'inactive';
    var onClick = this.selectItem.bind(this, el);
    return <li key={el} className={className} onClick={onClick}>{el}</li>;
  }

  render(){
    return (
      <ul>
      { this.state.data.map(this.renderItem) }
      </ul>
     );
  }
}

export default MyList
