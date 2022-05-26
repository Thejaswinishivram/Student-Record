import React, { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { firebasedatabase } from "../backend/firebase-handler";
import "./RecordList.styles.css"

const RecordList=()=>{
    const [studentList,setStudentList]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
            const studentRef=ref(firebasedatabase,'Student_records');
            onValue(studentRef,(dataSnapshot)=>{
                if(dataSnapshot.exists()){
                    const temp=[];
                    for(const usn in dataSnapshot.val()){
                        const student=dataSnapshot.child(usn).val();
                        temp.push(student);

                    }
                    setStudentList(temp);
                }
                else{
                    alert("No records found");
                }
            })
        }
        fetchData()
    },[]);

    return(
        <div>
            <div className="grid-List">
            <h1>List of Students</h1>
            {
                studentList.map((item)=>{
                    return(
                        <div className="grid-content">
                            <h5>{item.name}</h5>
                            <p>{item.usn}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}
export default RecordList;