// TODO
// var App = () => (
//   <div>Some cliche salutation</div>
// );


// ReactDOM.render(<App />, document.getElementById("app"));
var App = (props) => (

  <GroceryList items = {['apple','banana','orange']} />


);



var GroceryList = (props) => (
  <ul>
  {props.items.map( (item) =>
   <GroceryListItem item = {item}/>
  )}
</ul>
)

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }



  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {


    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
    )


}

}


ReactDOM.render(<App />, document.getElementById("app"));





// props.items.forEach(item, function() {
//   <li>{item}</li>
// })











