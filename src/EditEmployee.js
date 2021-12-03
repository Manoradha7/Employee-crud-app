import Button from "@mui/material/Button";
import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';

export function EditEmployee() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    fetch(`https://616e488fa83a850017caa8e1.mockapi.io/employee/${id}`, {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => setEmployee(data));
  }, [id]);

  return employee ? <UpdateEmployee employee={employee} /> : "";
}
function UpdateEmployee({ employee }) {
  const [id, setId] = useState(employee.id);
  const [avatar, setAvatar] = useState(employee.avatar);
  const [name, setName] = useState(employee.name);
  const [email, setEmail] = useState(employee.email);
  const [phone, setPhone] = useState(employee.phone);
  const [job, setJob] = useState(employee.job);
  const [salary, setSalary] = useState(employee.salary);

  const history = useHistory();
  const EditEmployee = () => {
    const updatedEmployee = {
      id: id,
      name: name,
      avatar: avatar,
      email: email,
      phone: phone,
      job: job,
      salary: salary,
    };
    console.log(updatedEmployee);


    fetch(`https://616e488fa83a850017caa8e1.mockapi.io/employee/${employee.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedEmployee),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => history.push("/employee"));
  };
  return (
    <div className="add-employee">
      <span>Edit Employee </span>
      <div className="employee-form">
        <TextField
          value={id}
          onChange={(x) => setId(x.target.value)}
          label="Enter Employee Id"
          variant="standard" />
        <TextField
          value={avatar}
          onChange={(x) => setAvatar(x.target.value)}
          label="Employee Avatar URL"
          variant="standard" />
        <TextField
          value={name}
          onChange={(x) => setName(x.target.value)}
          label="Enter Employee Name"
          variant="standard" />
        <TextField
          value={email}
          onChange={(x) => setEmail(x.target.value)}
          label="Enter Employee Email"
          variant="standard" />
        <TextField
          value={phone}
          onChange={(x) => setPhone(x.target.value)}
          label="Enter Employee Phone Number"
          variant="standard" />
        <TextField
          value={job}
          name="job"
          onChange={(x) => setJob(x.target.value)}
          label="Enter Employee Job"
          variant="standard" />
        <TextField
          value={salary}
          onChange={(x) => setSalary(x.target.value)}
          label="Enter Employee Salary"
          variant="standard" />
        <Button
          type="submit"
          variant="contained"
          onClick={EditEmployee}
          color="success"
        >
          Save
        </Button>
      </div>
    </div>
  );
}
