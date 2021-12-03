import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useHistory } from "react-router";
import { useEffect } from "react";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";

export function EmployeesList({ employees, setEmployees }) {
  const history = useHistory();

  const getEmployees = () => {
    fetch(`https://616e488fa83a850017caa8e1.mockapi.io/employee`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  };

  useEffect(getEmployees, []);

  const deleteEmployee = (id) => {
    fetch(`https://616e488fa83a850017caa8e1.mockapi.io/employee/${id}`, {
      method: "DELETE",
    }).then(() => getEmployees());
  };

  return (
    <div className="employee-list ">
      <span className="list-name"> Employee List </span>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            {/* <th>Avatar</th> */}
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Job</th>
            <th>Salary</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {employees.map(({ name, email, phone, job, salary, avatar, id }) => (
            <Employee
              id={id}
              key={id}
              name={name}
              email={email}
              phone={phone}
              job={job}
              salary={salary}
              avatar={avatar}
              deleteButton={
                <IconButton
                  aria-label="delete movie"
                  onClick={() => {
                    deleteEmployee(id);
                  }}
                  color="secondary"
                  className="delete-button"
                >
                  <DeleteIcon />
                </IconButton>
              }
              employeeDetail={
                <IconButton
                  aria-label="more info"
                  onClick={() => history.push("/employees/" + id)}
                  color="primary"
                  className="info-button"
                  style={{ marginLeft: "auto" }}
                >
                  <InfoIcon />
                </IconButton>
              }
              editButton={
                <IconButton
                  aria-label="edit movie"
                  style={{ marginLeft: "auto" }}
                  color="error"
                  className="edit-button"
                  onClick={() => history.push("/employee/edit/" + id)}
                >
                  <EditIcon />
                </IconButton>
              }
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
function Employee({
  id,
  name,
  email,
  phone,
  job,
  salary,
  avatar,
  deleteButton,
  employeeDetail,
  editButton,
}) {
  return (
    <tr>
      <td data="ID">{id}</td>
      {/* <td>
        <img className="employee-pic" src={avatar} alt={name} />
      </td> */}
      <td data="Name">
        {name}
        {employeeDetail}
      </td>
      <td data={email}>{email}</td>
      <td data="PhoneNo">{phone}</td>
      <td data="Job">{job}</td>
      <td data="Salary">${salary}</td>
      <td><div className="btn">{editButton}{deleteButton}</div></td>
    </tr>
  );
}
