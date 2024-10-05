import React,{useState} from 'react'
import './index.css'
import db from '../src/Cards'
const App=()=>{
  let[data,setData]=useState(db)

return(
    <>
    
    <h1 id="bh1">{data.length}birthdays today</h1>
    {data.map(x=>{
        return(
            <div id="container">
            <img src={x.image} alt="" style={({hegiht:"30px",width:"90px",borderRadius:"80%", backgroundColor:"lightgray"})}/>
            <span style={({padding:"80px", position:"relative", marginTop:"50px"})}>{x.name}</span>

            <span>{x.age}</span>
            
           </div>
          
        ) 
        
    })}
    <button style={{padding: '10px 120px', backgroundColor: '#ff6666', border: 'none', color: 'white', cursor: 'pointer',marginTop: '20px',marginLeft:"420px", borderRadius:"7px"}} 
    onClick={()=>{setData([])}}>clear all</button>
    </>
)
}
export default App






