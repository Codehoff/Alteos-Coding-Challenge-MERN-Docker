import React from "react";

import "./EmployeeItem.scss";
import "./UIElements/Avatar"
import Card from "./UIElements/Card";

const EmployeeItem = props => {
    return (
      <li className="employee-item">
        <Card className="employee-item__content">
          <div className="avatar">
            {props.gender === "female" ?
              <img src="https://afmnoco.com/wp-content/uploads/2019/07/74046195_s.jpg" alt="employee" />
              :
              <img src="https://st2.depositphotos.com/4111759/12123/v/450/depositphotos_121233262-stock-illustration-male-default-placeholder-avatar-profile.jpg" alt="employee" />
            }
          </div>
          <div className="employee-item__name">
            <h2>{`${props.name}, ${props.age} years`}</h2>
          </div>
          <div className="eye">
            {props.eyeColor === "blue" ? 
                <img src={process.env.PUBLIC_URL + '/blue_eye.png'} alt="blue eyes"/>
              : props.eyeColor === "green" ? 
              <img src={process.env.PUBLIC_URL + '/green_eye.png'} alt="blue eyes"/>
                :  <img src={process.env.PUBLIC_URL + '/brown_eye.png'} alt="blue eyes"/>
              }
          </div>
          <div className="employee-item__phone">
            <h4>{props.phone}</h4>
          </div>
          <div className="employee-item__company">
            <h4>{props.company}</h4>
          </div>
          <div className="employee-item__email">
            <h4>{props.email}</h4>
          </div>
          <div className="employee-item__address">
            <h4>{props.address}</h4>
          </div>
        </Card>
      </li>
    );
  };

export default EmployeeItem;