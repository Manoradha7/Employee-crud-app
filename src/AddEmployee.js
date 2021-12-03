import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import TextField from "@mui/material/TextField";

export function AddEmployee() {
  const [id, setId] = useState("");
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [job, setJob] = useState("");
  const [salary, setSalary] = useState("");

  const history = useHistory();

  const addEmployee = () => {
    const newEmployee = {
      id: id,
      name: name,
      avatar: avatar,
      email: email,
      phone: phone,
      job: job,
      salary: salary,
    };
    console.log(newEmployee);


    fetch(`https://616e488fa83a850017caa8e1.mockapi.io/employee`, {
      method: "POST",
      body: JSON.stringify(newEmployee),
      headers: { "Content-Type": "application/json" },
    }).then(() => history.push("/employee"));
  };

  return (
    <div className="add-employee">
      <span>New Employee </span>
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
          onClick={addEmployee}
          color="inherit"
        >
          Add Employee
        </Button>
      </div>
    </div>
  );
}
