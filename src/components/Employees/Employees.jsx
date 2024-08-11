import "./Employees.css";
import { listOfEmployees } from "../../data/employeesData";

const Employees = () => {
  return (
    <>
      {listOfEmployees.map((employee, index) => (
        <div
          key={index}
          className="flex j-c--center a-i--center f-w--wrap about__employee-container"
        >
          <div className="about__portrait" style={employee.portrait}></div>
          <p className="text-a--justify paragraph about__paragraph">
            <span className="bold span">
              {employee.name} {employee.surname} &#91; {employee.position} &#93;
            </span>
            {employee.description}
          </p>
        </div>
      ))}
    </>
  );
};

export default Employees;
