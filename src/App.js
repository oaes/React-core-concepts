import React, {useState,useEffect}from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  const bazer = ['alu','gazor','tomato','chili','adaa','payaaz','dpata','masala','murgi','vim']
  const Data = ['Oaes Kuruni',' 25', 'Software Developer','Negative','Dhaka,Bangladesh']
  const bookName = [
    {name:'js-practice', price:'500BDT'},
    {name:'HabluderJnnoProg.', price:'300BDT'},
    {name:'BolodTOboss', price:'400BDT'},
    {name:'programminger14gusti', price:'600BDT'}
  ]
//Create multiple components from an array of objects
const bookNames = bookName.map(Book => bookName)
console.log(bookNames);

    return (
    <div className="App">
    <header className="App-header">    

      <Counter></Counter>
      <Users></Users>


{ /* dynamic ul */ }
    <h3>Bazer-list</h3>
      <ul>
    {
      bazer.map(bazer => <li>{bazer}</li>)
    }
      </ul>
{/* dynamic book part */}
    {
      bookName.map(book => <Book book={book}></Book>)
    }
      <Book book={bookName[0]}></Book>

   
    
      {/* <Book name={bookName[1].name} price={bookName[1].price}></Book>
      <Book name={bookName[2].name} price={bookName[2].price}></Book>
      <Book name={bookName[3].name} price={bookName[3].price}></Book> */}
      
      <h2>Bio-data</h2>
      <My name={Data[0]} age={Data[1]} occupation={Data[2]} married={Data[3]} address={Data[4]}></My>
    
      

      </header>
    </div>
  );
}
//Component state/ react hook event handler
function Counter(){
 const [count, setCount] = useState(0);
 const buttonIncrease = () => {
   const newCount = count + 1;
  // etao short a likha jai// setCount(count+1)
   setCount(newCount);
 }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={buttonIncrease}>Increase</button>
    </div>
  )
}
//Set and update state and set event handler in React
function Users(){
  const [users, setUsers] = useState([]);

   useEffect(() => {
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(data => setUsers(data));
 },[])

  return (
    <div>
      <h3>dynamic users list: {users.length}</h3>
     
      <ul>
        {
        
          users.map(user => <li>{users.name}</li>)
        }
      </ul>
    </div>
  )
}

//Pass object to components and access object
function Book(props){
  const bookStyle = {
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'gray',
    float:'left',
    color:'black',
    height:'200px',
    width:'300px',
    margin:'10px'
  
  }
  //distructure
  const {name,price} = props.book;
  console.log(name,price);
  return (
    <div style={bookStyle}>
      <h3>{name}</h3>
      <p>Price:{price}</p>
      <button>Buy now</button>
    </div>
  
  )
}

//bio-data
function My(props){
  return (
    <div style={{border:'2px solid lime', padding:'5px'}}>
      <p>Name:{props.name}</p>
      <p>Age: {props.age}</p>
      <p>Occupation: {props.occupation}</p>
      <p>Marital-Status: {props.married}</p>
      <p>Address:{props.address}</p>
    </div>
  )
}
 













export default App;
