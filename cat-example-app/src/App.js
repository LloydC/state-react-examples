import React, {useState} from 'react';
import './App.css';
import Cat from './components/Cat/Cat';

const cats = [{
  name: 'Mr Wiggles',
  img: 'https://images.unsplash.com/photo-1615807713086-bfc4975801d0',
  age: 6,
  owner: 'Lloyd',
  sleeping: false
},
{
  name: "Nica",
  img: 'https://images.unsplash.com/photo-1542309667-2a115d1f54c6',
  age: 8,
  owner: "Julie",
  sleeping: true,
},
{
  name: 'Plato',
  img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba',
  age : 2040,
  owner: 'Valentina',
  sleeping: true 
}]

function App() {
  let [cat, setCat] = useState({});
  const handleChange = (e) => {
    setCat({...cat, [e.target.name]: e.target.value});
  }
  
  return (
    <>
      <h1><u>Iron Cats</u></h1>
      <div className="App">
        {cats.map((cat, index) => (
              <Cat key={index}
            name={cat.name.toUpperCase()}
            img={cat.img}
            age={cat.age}
            owner={cat.owner}
            sleeping={cat.sleeping}
            />
        ))}
      </div>
      <br/>
      <button style={{ margin: '0 auto'}}><b>Click here to only show sleeping cats</b></button>
      <br/>
      {/* <form>
        <input name="name" placeholder='Cat Name'></input>
        <input name="owner" placeholder='Cat Owner'></input>
        <input type="submit" value="Submit" />
      </form> */}
    </>
  );
}

export default App; 


// export default class App extends Component {

//   state = {
//     cats: cats
//   }

//   filterSleeping = () => {
//     const sleepingCats = this.state.cats.filter(cat => cat.sleeping)
//     this.setState({cats: sleepingCats})
//   }

//   render() {
//     return (
//       <div className="App">
//         <Box>
//           <button onClick={this.filterSleeping}>show only sleeping cats</button>
//         </Box>
//           {this.state.cats.map((cat, index) => (
//             <Cat key={index}
//            name={cat.name}
//            age={cat.age}

//            owner={cat.owner}
//            sleeping={cat.sleeping}
//            />
//       ))}
//       </div>
//     )
//   }
// }

