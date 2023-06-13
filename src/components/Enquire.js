import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Enquire() {
  const initialUserState = {
    id:0,
    name: "",
    email: "",
    course:""
  };

  const [user, setUser] = useState(initialUserState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    console.log(user);
    console.log(event.target);
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const newUser = () => {
    setUser(initialUserState);
    setSubmitted(false);
  };

  const saveUSer = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/users", user)
      .then((result) => {
        console.log(result);
        setSubmitted(true);
        newUser();
        navigate("/users");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  

  const navigate = useNavigate();
  return (
    <div>
      <h2>Enquiry form</h2>
      <p> Enter details here</p>
      <form onSubmit={saveUSer}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form control"
            id="name"
            value={user.name}
            name="name"
            onChange={handleInputChange}
            placeholder="John-smith"
          />
          <label>email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            placeholder="name@example.com"
          />
          <label>Course Name</label>
         <input
            type="text"
            className="form-control"
            id="course"
            name="course"
            value={user.course}
            onChange={handleInputChange}
            placeholder="React"
          />
        </div>
        <div>
          <button className="btn btn-success">Submit</button>
          <Link to="/users" className="btn btn-secondary">User Enquires</Link>&nbsp;&nbsp;&nbsp;
        </div>
      </form>
    </div>
  );
}

export default Enquire;
