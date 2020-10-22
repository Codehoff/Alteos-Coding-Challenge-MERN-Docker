import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import LoadingSpinner from "./components/LoadingSpinner";
import EmployeesList from "./components/EmployeesList";

const App = () => {

  const useEmployees = () => {
    const [employees, setEmployees] = useState([]);
    const [isLoading, setLoading] = useState(false);
    

    useEffect(() => {
      const handleAPI = async () => {
        setLoading(true);
        const { data } = await axios.get("/api/employees");
        const newEmployees = data.employees || [];
        setEmployees(newEmployees);
        setLoading(false);
      };

      handleAPI();
    }, []);
    return [employees, isLoading];
  };


  const [employees, isLoading] = useEmployees();
  return (
    isLoading ?
      <div className="container">
        <div className="center">
            <LoadingSpinner />
        </div>
      </div>
    :
      <EmployeesList items={employees} />
  );
}

export default App;
