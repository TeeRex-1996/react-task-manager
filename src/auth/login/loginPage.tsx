import React, { useState } from "react";
import type { Login } from "../../interfaces/login/interfaceLogin";
import axios from "axios";
import '../../App.css'
import { useNavigate } from "react-router-dom";
const LoginPage : React.FC = () =>{
     const navigate = useNavigate()
    const [loginUser, setloginUser] = useState<Login>({username : '' , password: ''});
    const [success, setsuccess] = useState<boolean>(false);
    const [err, seterr] = useState<boolean>(false);
const change = (e : React.ChangeEvent<HTMLInputElement>) =>{
    const { name, value} = e.target;
    setloginUser(item=>({
        ...item,
        [name] : value
    }))
}
const  handleLogin = async (e : React.FormEvent<HTMLFormElement>) =>{
e.preventDefault();
try{
 const response = await axios.get<Login[]>(`http://localhost:3000/user?username=${loginUser.username}&password=${loginUser.password}`)
 if(response.data.length>0){
    seterr(false)
   setsuccess(true)
  navigate(`/dashboard/${loginUser.username}`);

 }else{
    setsuccess(false)
    seterr(true)
 }
}
catch(e){
  console.log(e)
}
}
    return(
        <React.Fragment>
            <h2>Login Page</h2>
            <div className="container">
                <title>Login Page</title>
                <form className="loginpage" onSubmit={handleLogin}>
                   <label htmlFor="username">Username</label> <input type="text" value={loginUser?.username} name="username" className="form-control" onChange={change} />
                  <label htmlFor="password">Password</label>  <input type="text" value={loginUser?.password} name="password" className="form-control" onChange={change}/>
                       <br /><button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div>
            {
                success && <p>Login Successfull</p>
            }
           </div>
           <div>
            {
                err && <p>Login not Successfull</p>
            }
           </div>
        </React.Fragment>
    )
}
export default LoginPage;