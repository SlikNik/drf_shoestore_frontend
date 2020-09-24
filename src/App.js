import React from 'react';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      shoes : []
    }
  }

  componentDidMount(){
    fetch("http://127.0.0.1:8000/shoes/")
    .then(res => res.json)
    .then(data => this.setState({shoes : data.results}))
  }
  render(){
  return (
    <div>
      <h1>Slik's Shoe Store</h1>
      <ul>
      {this.state.shoes.map(shoe =>
        <li>
          <li>{shoe.size}</li>
          <li>{shoe.brand_name}</li>
          <li>{shoe.manufacturer}</li>
          <li>{shoe.color}</li>
          <li>{shoe.material}</li>
          <li>{shoe.shoe_type}</li>
          <li>{shoe.fasten_type}</li>
        </li> 
      )}
      </ul>
    </div>
  );
  }
}

export default App;
