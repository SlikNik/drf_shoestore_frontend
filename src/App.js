import React from 'react';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      shoes : [{size: 7.5, brand_name: 'Nik', manufacturer: 'Nike', color: 'Orange', 
                material: 'cotton', shoe_type: 'sneaker', fasten_type: 'Shoe strings'}]
    }
  }

  componentDidMount(){
    fetch("http://127.0.0.1:8000/api/shoes")
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      this.setState({shoes : data})
    })
  }


  render(){
  return (
    <div>
      <h1>Slik's Shoe Store</h1>
      {this.state.shoes.map((shoe, id) =>
            <div key={id}>
            <ul>
              <li>Size: {shoe.size}</li>
              <li>Brand Name: {shoe.brand_name}</li>
              <li>
                Manufacturer: <a href={shoe.manufacturer}>{shoe.manufacturer}</a>
              </li>
              <li>
                Color: <a href={shoe.color}>{shoe.color}</a>
              </li>
              <li>Material: {shoe.material}</li>
              <li>
                Type: <a href={shoe.shoe_type}>{shoe.shoe_type}</a>
              </li>
              <li>Fasten Type: {shoe.fasten_type}</li>
              <br />
            </ul>
          </div> 
      )}
    </div>
  );
  }
}

export default App;
