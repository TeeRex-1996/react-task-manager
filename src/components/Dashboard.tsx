import React from "react";
import '../../src/App.css'
import { Link, useNavigate } from "react-router-dom";

const Dashboard : React.FC = () =>{
    // const {username} = useParams<{username : string}>();
    const navigate = useNavigate();
    const addTask = () =>{
        navigate('/addTasks');
    }
    // useEffect(()=>{
    //      username &&  localStorage.setItem('session', username);
    // },[])
    return (
        <React.Fragment>
            <div className="dashboard">
            <p style={{fontFamily:'sans-serif'}}>Hello {localStorage.getItem('session')}</p>
            <div className="row">
                <div className="col-4">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Add New Task</h5>
                <p>You can add new tasks from here!</p>
                <p className="description">Add new tasks which can track your daily progress</p>
                <button className="btn btn-danger" onClick={addTask}>Add Task</button>
            </div>
            </div>
            </div>
                <div className="col-4">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Show Task List</h5>
                <p>You can view tasks list from here!</p>
                <p className="description">Add new tasks which can track your daily progress</p>
               <Link to='/tasklist'> <button className="btn btn-danger">Show Tasks List</button></Link>
            </div>
            </div>
            </div>
            
              <div className="col-4">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Add Title</h5>
                <p>You can Update new tasks from here!</p>
                <p className="description">Add new tasks which can track your daily progress</p>
                <button className="btn btn-danger">Add Feedback</button>
            </div>
            </div>
            </div>
              </div>
            <div className="row">
            <div className="col-4">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Add Title</h5>
                <p>You can Update new tasks from here!</p>
                <p className="description">Add new tasks which can track your daily progress</p>
                <button className="btn btn-danger">Viw Tasks</button>
            </div>
            </div>
            </div>
            </div>
            </div>
            
        </React.Fragment>
    )
}
export default Dashboard;