import React from 'react';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      shoes : []
    }
  }

  fetchedFKS(data){
    this.setState({shoes : data})
  }
  componentDidMount(){
    fetch("http://127.0.0.1:8000/api/shoes")
    .then((res) => res.json())
    .then(async (data) => {
      console.log(data)
      let new_data = []
      let shoe = {size: 0, brand_name: '', manufacturer: '', color: '', 
      material: '', shoe_type: '', fasten_type: ''}
      for(let i = 0; i < data.length; i++){
        shoe.size = data[i].size
        shoe.brand_name = data[i].brand_name
        shoe.manufacturer =await fetch(`${data[i].manufacturer}`)
        .then((res) => res.json())
        .then((data2) => data2)
        shoe.color = await fetch(`${data[i].color}`)
          .then((res) => res.json())
          .then((data2) => data2)
        shoe.shoe_type = await fetch(`${data[i].shoe_type}`)
          .then((res) => res.json())
          .then((data2) => data2)
        shoe.material = data[i].material
        shoe.shoe_type = data[i].shoe_type
        shoe.fasten_type = data[i].fasten_type
        new_data.push(shoe)
        console.log(shoe)
        // console.log(new_data)
      }
      this.fetchedFKS(new_data)
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
                Manufacturer: <a href={shoe.manufacturer.website}>{shoe.manufacturer.name}</a>
              </li>
              <li>
                Color: {shoe.color.color_name}
              </li>
              <li>Material: {shoe.material}</li>
              <li>
                Type: 
                  {
                    fetch(`${shoe.shoe_type}`)
                    .then((res) => res.json())
                    .then((data2) => data2)
                  }
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
