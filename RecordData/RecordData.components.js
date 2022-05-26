import { async } from "@firebase/util";
import "./RecordData.styles.css";
import React, { useState } from "react";
import { ref,set } from "firebase/database";
import { firebasedatabase } from "../backend/firebase-handler";
const RecordData=()=>{
    const [studentData,setStudentData]=useState({
        name:"",
        usn:""
    })
    const handleChange=(event)=>{
        const{name,value}=event.target;
        setStudentData({
            ...studentData,
            [name]:value
        })
    }
    const handleSave=async()=>{
        const recordRef=ref(firebasedatabase,`Student_records/${studentData.usn}`);
        await set(recordRef,studentData);
        alert("recorded")
        setStudentData({
            name:"",
            usn:""
        })
    }
    return(
       
            <div className="record-data-container">
            <div className="input-fields-container">
              <input className="inputs" placeholder='Student Name' name='name'  value={studentData.name} onChange={handleChange}/>
              <input className="inputs" placeholder='Student Usn' name='usn'  value={studentData.usn} onChange={handleChange}/>
              <button className="create-save-button" onClick={handleSave}>Save</button>
              </div>
            </div>
          );
        }
  
    
export default RecordData;