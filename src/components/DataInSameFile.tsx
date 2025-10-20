import React, { useEffect } from "react";
import type { taskprops } from "../interfaces/tasks/TaskProps";

const DataInSameFile : React.FC<taskprops> = ({records}) =>{
    useEffect(()=>{
      console.log(records)
    })
return(
    <React.Fragment>
     <table className="table table-repsonsive">
        <thead>
            <tr>
        <th>Task Name</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Discription</th>
        <th>Status</th>
        </tr>
        </thead>
        <tr>
            <td>{records.name}</td>
            <td>{records.start}</td>
            <td>{records.end}</td>
            <td>{records.desc}</td>
            <td>{records.status ? "Completed" : "Pending"}</td>
        </tr>
     </table>
    </React.Fragment>
)
}
export default DataInSameFile;