import "./date.css"
import DateDisplay from "./DateDisplay";
import { useState } from 'react';
import { useEffect } from 'react';
const DateContainer = () => {
    const [date,setDate] = useState(Date.now());
    useEffect(()=>{
        console.log("render");
    },[date])
    return ( 
        <>
            <input type="date" className="date-input" onChange={(e)=>setDate(e.target.value)}/>
            <DateDisplay date={date}/>
        </> 
    );
}
 
export default DateContainer;