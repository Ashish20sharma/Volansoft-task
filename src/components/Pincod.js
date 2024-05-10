import axios from 'axios';
import React, { useState } from 'react'

export default function Pincod() {
    const [pincod,setPincod]=useState("");
    const [data,setData]=useState([]);
    const [error,setError]=useState("")
    const [loading,setLoading]=useState(false)
    const handleGo=async()=>{
        try {    
            await axios.get(`https://api.postalpincode.in/pincode/${pincod}`).then((result)=>{
                setData(result.data);
                setLoading(true);
            })
        } catch (error) {
           setError("Enter the wright Pincod");
        }
    }
  return (
    <div>
      <input type="text" onInput={(e)=>setPincod(e.target.value)} name="" id="" />
      <button onClick={()=>handleGo()} >Go</button>
      {loading&&data.map((item)=>{
        return <ul>
            <li>{item.Message}</li>
        </ul>
      })}
      <h1>{error}</h1>
    </div>
  )
}
