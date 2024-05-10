import React, { useState } from 'react'
import axios from "axios"
export default function IfscCode() {
    const [ifscData,setIfscdata]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState("Enter the IFSC in input")
    const [ifsc,setIfsc]=useState();
    const handleInput=(event)=>{
        let ifscCodeIs="YESB0DNB002";
        setIfsc(event)
        if(ifsc===ifscCodeIs){
            setIfsc(event);
            console.log(ifscData)
        }else{
            setLoading(false);
            setError("IFSC is not matched");
        }
    }


    const handleFetch=async()=>{
        try {
            await axios.get(`https://ifsc.razorpay.com/${ifsc}`).then((result)=>{
            setIfscdata([result.data]);
            console.log(ifscData)
        })
        setIfsc("")
        setLoading(true)
        } catch (error) {
            setError("Please Enter right ifsc")
        }
       
    }

  return (
    <div>
        <input type="text"  id="ifsc" value={ifsc} onInput={(e)=>handleInput(e.target.value)}/>
      <button onClick={()=>handleFetch()}>Go</button>

      {loading?ifscData.map((item)=>{
        return <ul>
            <li style={{listStyle:"none"}}>IFSC: {item.IFSC}</li>
            <li style={{listStyle:"none"}}>BRANCH: {item.BRANCH}</li>
            <li style={{listStyle:"none"}}>BANKCODE: {item.BANKCODE}</li>
            <li style={{listStyle:"none"}}>BANK: {item.BANK}</li>
            <li style={{listStyle:"none"}}>CITY: {item.CITY}</li>
            <li style={{listStyle:"none"}}>ADDRESS: {item.ADDRESS}</li>
            <li style={{listStyle:"none"}}>DISTRICT: {item.DISTRICT}</li>
            <li style={{listStyle:"none"}}>STATE: {item.STATE}</li>
            <li style={{listStyle:"none"}}>CONTACT: {item.CONTACT}</li>
        </ul>
      }):<h2>{error}</h2>}
    </div>
  )
}
