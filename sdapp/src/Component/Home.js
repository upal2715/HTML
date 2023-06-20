import React, { useState } from "react";

const Home=()=>{
     const[list, setList]=useState('')
     const[date, setDate]=useState([])

     const Additems=(event)=>{
          setList(event.target.value)
     }
     const Addclick=()=>{
             setDate([...date, list])
             setList("")
     }
   
     const deletevalue=(i)=>{
          let rops=date.filter((items,index)=>index!==i)
          setDate(rops)
     }
     console.log(date)
     return(
          <>
          <h1>Todo-list</h1>
          <div className="continer">
               <div className="task">
               <input type="text" placeholder="Add-items" onChange={Additems}/>
               <button  onClick={Addclick}>Click me</button>
               <div className="reset">Reset</div>
               </div>
               
          </div>
          <div> 
              {date.map((curvalo,i)=>{
               return <div key={(i)}>
                    <h1>{curvalo}</h1>
                    <button onClick={()=> deletevalue(i)}>Del</button>
               </div>
              })}
          </div>
          </>
     )
}
export default Home;