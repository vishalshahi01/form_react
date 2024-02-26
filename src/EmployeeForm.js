import React, { useState } from "react";
import "../src/EmployeeForm.css"; // Importing the CSS file for styling

// EmployeeForm component
const EmployeeForm = ({ onSubmit }) => {
  // State to manage form data

  // setFormdata updates the state of the formData object,
  // allowing the component to reactively update based on user input, such as typing into input fields.
  const [formData, setFormData] = useState({
    empId: "",
    name: "",
    email: "",
    experience: "",
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default form submission behavior
    onSubmit(formData); // Calling the onSubmit function passed as prop
    setFormData({ // Clearing the form data after submission
      empId: "",
      name: "",
      email: "",
      experience: "",
    });
  };

  // Rendering 
  return (
    <form onSubmit={handleSubmit} className="form-container">
      {/* Input fields for employee details */}
      <div className="form-group">
        <label htmlFor="empId">Employee ID:</label>
        <input
          type="text"
          id="empId"
          name="empId"
          value={formData.empId}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="experience">Experience:</label>
        <input
          type="text"
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
        />
      </div>
      {/* Submit button */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmployeeForm;

/* statement is used to export the EmployeeForm component from its file so that
 it can be imported and used in other files within the project. */
