import "./App.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useHistory, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import { EmployeesList } from "./EmployeesList";
import { AddEmployee } from "./AddEmployee";
import { EmployeeDetail } from "./EmployeeDetail";
import { EditEmployee } from "./EditEmployee";

export default function App() {
  const history = useHistory();

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("https://616e488fa83a850017caa8e1.mockapi.io/employee")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);
  console.log(employees);

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <header className="App-header">
            <p className="App-title">MRD TECH </p>
          </header>
          <Button
            variant="text"
            color="inherit"
            onClick={() => history.push("/")}
          >
            Home
          </Button>
          <Button
            variant="text"
            color="inherit"
            onClick={() => history.push("/employee")}
          >
            Employee
          </Button>
          <Button
            variant="text"
            color="inherit"
            onClick={() => history.push("/add-employee")}
          >
            Add Employee
          </Button>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/employee/edit/:id">
          <EditEmployee employees={employees} setEmployees={setEmployees} />
        </Route>
        <Route exact path="/employee">
          <EmployeesList employees={employees} setEmployees={setEmployees} />
        </Route>
        <Route path="/add-employee">
          <AddEmployee employees={employees} setEmployees={setEmployees} />
        </Route>
        <Route path="/employees/:id">
          <EmployeeDetail employees={employees} />
        </Route>
      </Switch>
    </div>
  );
}

function Welcome() {
  return (
    <div className="welcome">
      Welcome to <span> MRD TECH</span>
    </div>
  );
}
