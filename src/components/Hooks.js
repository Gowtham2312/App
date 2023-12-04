import React, { useState } from 'react'

function Hooks() {

    let [a, setA] = useState(0); // Normal useState
    let [b, setB] = useState({name:'',num:''}); // useState with object

    let [items,setItems] = useState([]); // useState with array

    function fun()
    {
        setA(a=>a+1);
        setA(a=>a+1);
        setA(a=>a+1);
    }

    let addItems=()=>{
      setItems([...items,{name :b.name,num: b.num}])
      console.log("Items :",items);
      console.log("Item name:",items.name);
    }

  return (
    <>
        <h2>State :{a   }</h2>
        {/* <button className='btnclr' onClick={()=>setA(a+1)}>Button</button> */}
        <button className='btnclr' onClick={fun}>Button</button>
        <hr />
        <div>
          <input type='text' value={b.name} onChange={(e)=>setB({...b,name: e.target.value})}></input>
          <input type='text' value={b.num} onChange={(e)=>setB({...b,num: e.target.value})}></input>

          <h3>Name: {b.name}</h3>
          <h3>Number: {b.num}</h3>

          <button onClick={addItems}>Add items</button>
          <ul>
            {items.map((items)=>(
              <>
                <li key={items.num}>{items.name}</li>
              </>
            ))}
          </ul>

          </div>
          </>
  )
}

export default Hooks