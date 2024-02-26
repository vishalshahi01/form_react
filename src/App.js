import React from "react"; // Importing React library
import EmployeeForm from "./EmployeeForm"; // Importing the EmployeeForm component


const App = () => {
  // Function to handle form submission
  const handleSubmit = (formData) => {

    // This function will be called when the form inside EmployeeForm is submitted.
    //  will receive the form data as an argument.
  
    console.log(formData); 
  };

  // Rendering the UI of the App component
  return (
    <div>
      {/* Heading with centered text */}
      <h1 style={{ textAlign: "center" }}>Employee Details</h1>
      {/* Rendering the EmployeeForm component */}
      <EmployeeForm onSubmit={handleSubmit} />
    </div>
  );
};

// Exporting the App component
export default App;
