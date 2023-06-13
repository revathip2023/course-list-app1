import { Link, useNavigate } from "react-router-dom";
import axios, { Axios } from "axios";
import { useEffect, useState } from "react";


function Courses(){

    const [courses,setCourses] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        getCourses();
    },[])

    const getCourses = () =>{
        axios.get("http://localhost:3001/courses")
        .then((result) =>{
            console.log(result);
            if(result.status === 200){
                setCourses(result?.data);
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    const enquire = () =>{
        
        navigate("/Enquire");
    }


    return(
        <div>
            <h3>List of Courses</h3>
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th>Id</th>&nbsp;
                        <th>Name</th>&nbsp;
                        <th>Fees</th>&nbsp;
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course,i)=>{
                        return(
                            <tr key={i}>
                                <td>{course.id}</td>&nbsp;&nbsp;
                                <td>{course.name}</td>&nbsp;&nbsp;
                                <td>{course.fee}</td>&nbsp;&nbsp;
                                <td>
                                    <button onClick={enquire} className="btn btn-secondary">Enquire</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Courses;

