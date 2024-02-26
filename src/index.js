// Importing the createRoot function from ReactDOM client
//  createRoot function is part of React's concurrent mode API.
// It's used to create a root for rendering React elements
import { createRoot } from "react-dom/client";

// Importing the main App component from App.js
import App from "./App";

// Getting the root element from the HTML file with id "root"
const rootElement = document.getElementById("root");

// Creating a root using createRoot function with the rootElement
const root = createRoot(rootElement);

// Rendering the App component inside the root
root.render(<App />);

/*The render function in React's concurrent mode renders
 the specified React element  into the root of the application. */