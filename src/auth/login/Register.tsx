import React, { useState } from "react";
import '../../App.css'
import type { register } from "../../interfaces/login/register/register";
import axios from "axios";
const Register : React.FC = () =>{
 const [message, setmessage] = useState<string>();
 const [user, setuser]  = useState<register>( {name: '',lastname: '', email:'', password:'', gender:'',country:'',city:'', mob:null});
    const change =(e : React.ChangeEvent<HTMLInputElement  | HTMLSelectElement>) =>{
        const {name,type, value} = e.target;
       setuser(x=>({...x,[name] : type == 'number' ? parseInt(value) : value}))
    }
const addData = async(e : React.FormEvent<HTMLFormElement>) =>{
e.preventDefault();
try{
 const res  = await axios.post('http://localhost:3001/user',user)
if(res.data)
{setmessage('Registered');
 await axios.post(`http://localhost:3002/user` ,{
    username : res.data.email,
    password : res.data.password
 })
}
else{setmessage('Not Registered')}
}catch(err){
    console.log(err);
    setmessage('Not Registered');
    
}
}

    return (
        <React.Fragment>
        <div className="register">
            <form onSubmit={addData}>
         <table>
            <tr>
                <th>Name : </th>
             <td>   <input type="text" className="form-control" value={user.name} name="name" onChange={change} /></td>
                </tr>
                <tr>
                <th>Sirnmame : </th>
                <td><input type="text" className="form-control" value={user.lastname} name="lastname" onChange={change} /></td>
                </tr>
                <tr>
                <th>Email : </th>
                  <td> <input type="text" className="form-control" value={user.email} name="email" onChange={change} /></td>
                </tr>
                <tr>
                <th>
                Password : 
                </th>
                  <td> <input type="text" className="form-control" value={user.password} name="password" onChange={change} /></td>
                </tr>
                <tr>
                    <th>
                    Gender :   </th>
                     <td>  <label htmlFor="gender"><input name="gender" type="radio" checked={user.gender==='male'} value='male' onChange={change}></input>Male</label>
                    <label htmlFor="gender"><input name="gender" type="radio" checked={user.gender==='female'} value='female' onChange={change}></input>Female</label>
                 </td>
                </tr>
                <tr>
                <th>Country : </th>
                <td><select className="form-select" name="country" value={user.country} onChange={change}>
                    <option>Select Country</option>
                    <option value="india">India</option>
                    <option value="russia">Russia</option>
                    </select></td></tr>
                    <tr><th>City : </th>
                        <td><select className="form-select" name="city" value={user.city} onChange={change}>
                            <option>Select City</option>
                                <option value="india">Washim</option>
                                <option value="russia">Risod</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th>Mobile Number : </th>
                        <td> <input type="number" name="mob" className="form-control" onChange={change} /></td>
                    </tr>
                    <tr>
                        <td colSpan={3}> 
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </td>
                     </tr>
         </table>
           </form>
        </div>
        {
            message && <p>{message}</p>
        }
        </React.Fragment>
    )
}

export default Register;