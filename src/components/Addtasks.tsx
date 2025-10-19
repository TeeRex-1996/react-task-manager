import React from "react";
import '../../src/App.css'
const Addtasks : React.FC = () =>{
    
return (
    <React.Fragment>
        <div className="container">
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th colSpan={6}>Add New Task</th>
                    </tr>
                    <tr>
                        <th>Task Name : </th>
                        <td><input type="text"  name="name" className="form-control" required/></td>
                        <th>Start Date :</th><td><input type="date" className="form-control" name="start" required></input></td>
                        <th>End Date :</th><td><input type="date" className="form-control" name="end"></input></td>
                    </tr>
                    <th>Description :</th><td colSpan={1}><input type="textarea" className="form-control" name="desc" required></input></td>
                    <th>Status : </th><td><input type="checkbox" className="form-check" name="status" required></input></td>
                    <th>Status : </th><td><button type="submit" className="btn btn-primary">Add Tasks</button></td>
                </thead>
            </table>
        </div>
    </React.Fragment>
)
}

export default Addtasks;