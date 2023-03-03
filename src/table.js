import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Table = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://63cfb761e52f587829a384e5.mockapi.io/Form')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEmployees(data);
      })
     
  }, []);
 
  function editFunc(id) {
    navigate(`/Form/${id}`)
  }
  
  function deleteFunc(id) {
    fetch(`https://63cfb761e52f587829a384e5.mockapi.io/Form/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        alert('are you sure you want to  delete')
        const updatedEmployees = employees.filter(
          (employee) => employee.id !== id
        );
        setEmployees(updatedEmployees);
      })
      
  }
  
  return (
    <>
      <div className="container table-responsive py-5">
        <table className="table table-dark table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => {
              return (
                <tr key={employee.id}>
                  <td>{employee.Firstname}</td>
                  <td>{employee.Lastname}</td>
                  <td>{employee.Email}</td>
                  <td>
                    <button
                      className="bg-primary col-sm-2"
                      type="button"
                      onClick={() => editFunc(employee.id)}
                    >
                      <span>
                        <i className="bx bx-edit"></i>
                      </span>
                    </button>
                    <button
                      className="border-0 bg-danger col-sm-2"
                      type="button"
                      onClick={() => deleteFunc(employee.id)}
                    >
                      <span>
                        <i className="bx bxs-trash"></i>
                      </span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;

 
  


