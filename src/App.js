import React,{useState} from 'react';
import './App.css';

function Person(prop){
  // console.log(prop);
  const personStyle={
    border: '1px solid gold',
    margin:'5px',
    width: '400px'
  }
  return (
    <div style={personStyle}>
        <p>Name:{prop.name}</p>
        <p>Profession:{prop.job}</p>
    </div>
  )
}

function Products(props){
  const style={
    border:'1px solid green',
    borderRadius: '10px',
    backgroundColor: 'grey',
    display: 'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:'400px'
  }
  console.log(props);
  return(
  <div style={style}>
    <h5>Name:{props.item.name}</h5>
     <p>Price:{props.item.price}</p>
     <button>buy now</button>
  </div>)
}



function App() {
  const people=['rubi','kubi'];
  const product=[
    {id:1,name:'photoshop',price:'$45'},
    {id:2,name:'adobe',price:'$50'},
    {id:3,name:'adobe',price:'$50'},
    {id:4,name:'adobe',price:'$50'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Count />

        {product.map((item)=>{
          const {id,name,price}=item;
          return(<>
          <Products item={product } />
           
           {/* <SingleItem key={item.id}{...item}>
          
          </SingleItem> */}
          </>)
        })}
        {/* <Products product={product[0]}></Products>
        <Products product={product[1]}></Products>
        <Person name={people[0]} job='singer'></Person>
        <Person name={people[1]} job='dancer'></Person> */}
      </header>
    </div>
  );
}

function SingleItem({name,price}){
  const style={
    border:'1px solid green',
    borderRadius: '10px',
    backgroundColor: 'grey',
    display: 'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:'400px'
  }
  return (<div style={style}>
    <h2>{name}</h2>
    <p>{price}</p>
  </div>)

}

function Count(){
  const[count,setCount]=useState(0);
  return(<>
    <h3>Count:{count}</h3>
    <button onClick={()=>setCount(count+1)}>increase</button>
  </>)
}

export default App;
