import React, { Component } from 'react';

import './EmployeesList.scss';
import EmployeeItem from "./EmployeeItem";


class EmployeesList extends Component {

    state = {
        employees: this.props.items
    }

    searchbarChangedHandler = (event) => {
        this.setState({
            employees: this.props.items.filter(employee => employee.name.toLowerCase().includes(event.target.value.toLowerCase()))
        })
    }
    
    render() {
        return (
            <div className="container">
                <div className="search">
                    <h2>Search by name:</h2>
                    <input type="text" className="searchbar" onChange={this.searchbarChangedHandler} placeholder="Search..." />
                </div>
                <ul className="employees-list">
                    {this.state.employees.map(employee => (
                        <EmployeeItem
                            key={employee.id}
                            id={employee.id}
                            name={employee.name}
                            age={employee.age}
                            eyeColor={employee.eyeColor}
                            company={employee.company}
                            email={employee.email}
                            phone={employee.phone}
                            address={employee.address}
                            gender={employee.gender}
                        />
                    ))}
                </ul>
            </div>
        );
    }
};

export default EmployeesList;