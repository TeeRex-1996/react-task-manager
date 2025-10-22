import axios from "axios"
import React, { useState } from "react"
import type task from "../interfaces/tasks/tasks"
const Tasklist : React.FC = () =>{
    const [message, setmessage] = useState<string>('')
    const [data, setdata] = useState<task[]>([]);
useState(async ()=>{
    try{
   const res = await axios.get('http://localhost:3000/tasks');
   if(res.data){
    setdata(res.data);
   }}
    catch(e){
    setmessage(message);
    }
})
return(
    <React.Fragment>
        <div className="task-container">
            <table className="table table-responsive">
                <thead>
                <tr>
                    <th>Task Name</th>
                    <th>Start Date</th>
                    <th>Target Date</th>
                    <th>Discription</th>
                    <th>Status</th>
                </tr>
               { data && data.map((x)=>(
                    <tr>
                    <td>{x.name}</td>
                    <td>{x.start}</td>
                    <td>{x.end}</td>
                    <td>{x.desc}</td>
                    <td>{x.status  ? <p style={{color:'green'}}>Completed</p> : <p style={{color:'red'}}>Not Completed</p>}</td>
                     </tr>
               ))}
                </thead>
            </table>
        </div>
    </React.Fragment>
)
}
export default Tasklist;