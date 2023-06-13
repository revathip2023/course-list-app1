import { Link, useNavigate } from "react-router-dom";
import axios, { Axios } from "axios";
import { useEffect, useState } from "react";

function Users(){
const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    },[])

    const getUsers = () =>{
        axios.get("http://localhost:3001/users")
        .then((result)=>{
            if(result.status === 200)
            setUsers(result?.data);
        })
        .catch((error)=>{console.log(error);})
    }

    
    return(
        <div>
            <br/>
            <h3> List of User Enquires</h3><br/>
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th>Name</th>&nbsp;
                        <th>Email</th>&nbsp;
                        <th>Course Name</th>&nbsp;
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i)=>{
                        return(
                            <tr key={i}>
                                <td>{user.name}</td>&nbsp;&nbsp;
                                <td>{user.email}</td>&nbsp;&nbsp;
                                <td>{user.course}</td>&nbsp;
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default Users;