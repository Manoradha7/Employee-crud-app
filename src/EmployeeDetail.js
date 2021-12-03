import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export function EmployeeDetail() {
  const { id } = useParams("");

  const [employee, setEmployee] = useState({});
  useEffect(() => {
    fetch(`https://616e488fa83a850017caa8e1.mockapi.io/employee/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setEmployee(data));
  }, [id]);
  return (
    <div className="emp-card">
      <div className="emp-detail">
        <img className="emp-pic" src={employee.avatar} alt={employee.name} />
        <p className="emp-id">ID :{employee.id}</p>
        <p className="emp-name">Name :{employee.name}</p>
        <p className="emp-email">Email:{employee.email}</p>
        <p className="emp-phone">Phone No :{employee.phone}</p>
        <p className="emp-role"> Job : {employee.job}</p>
        <p className="emp=salary">Salary : ${employee.salary}</p>
      </div>
    </div>
  );
}
