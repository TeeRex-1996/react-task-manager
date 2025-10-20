import React, { useState } from "react";
import '../../src/App.css'
import type task from "../interfaces/tasks/tasks";
import axios from "axios";
import DataInSameFile from "./DataInSameFile";
const Addtasks : React.FC = () =>{
    const [newtask,setnewtask] = useState<task>({name:'',start:'',end:'',desc:'',status:false});
    const [message, setmessage] = useState<string>('');
    const [record,setrecord] = useState<task>({name:'',start:'',end:'',desc:'',status:false});
    const change = (e :  React.ChangeEvent<HTMLInputElement>) =>{
        const {name, type, value, checked} = e.target;
        setnewtask(previous=>
        ({...previous,
             [name] : type=='checkbox' ? checked : value 
        }));
    }
    const submitData  =async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if(newtask.start && newtask.end && newtask.start >= newtask.end){setmessage("Something wrong with date")}
        else{
        try{
            const res = await axios.post<task>('http://localhost:3000/tasks', newtask);
            if(res.data){
                setmessage('Success');
                console.log("success");
                setrecord(res.data);
            }
        }catch(e){
            setmessage("error");
            console.log(e);
        }
    }
}
return (
    <React.Fragment>
        <div className="container">
            <form onSubmit={submitData} method="post">
            <table className="table table-repsonsive">
                    <tr>
                        <th colSpan={6}>Add New Task</th>
                    </tr>
                    <tr>
                        <th>Task Name : </th>
                        <td><input type="text" value={newtask.name} onChange={change} name="name" className="form-control" required/></td>
                        <th>Start Date :</th><td><input type="date" onChange={change} value={newtask.start} min={new Date().toISOString().split("T")[0]} className="form-control" name="start" required></input></td>
                        <th>End Date :</th><td><input type="date" onChange={change} min={newtask.start && new Date().toISOString().split("T")[0]} value={newtask.end} className="form-control" name="end"></input></td>
                    </tr>
                    <th>Description :</th><td colSpan={1}><input type="textarea" onChange={change} className="form-control" name="desc" required></input></td>
                    <th>Status : </th><td><input type="checkbox" className="form-check" onChange={change} name="status" ></input></td>
                  <td colSpan={2}><button type="submit" className="btn btn-primary">Add Tasks</button></td>
               
            </table>
            </form>
        </div>
         {message == 'Success' ? <p style={{color:'green'}}>{message}</p> : <p style={{color:'red'}}>{message}</p>}

        {
            message == 'Success' && 
            <DataInSameFile records={record} />
        }

    </React.Fragment>
)
}

export default Addtasks;