// - Create a MemeGenerator component.
// -  Use the useState hook to create state variables for templates, selected template, text inputs, and meme URL.
// - Use the useEffect hook to fetch meme templates from the Imgflip API when the component mounts.
// - Create a function to handle input changes for the text inputs.
// - Create a function to handle template selection.
// - Create a function to handle meme generation (button).
// - Render the component with a header and conditional rendering for the template selection component and the meme generation component.
// - When a user selects a template, render the selected template with input (text) fields for each box.
// - When a user enters text in the input fields, update the state variables for the text inputs.
// - When a user clicks "Generate Meme", use the Imgflip API to generate a meme with the selected template and text inputs.
// - When the meme is generated, display it on the page with a button to create another meme as well as download and share to social media icons.
// - When the user clicks "Create Another Meme", reset the state variables for the selected template, text inputs, and meme URL.


import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import MemeGenerator from './components/MemeGenerator';
import Nav from "./components/Nav"
import Header from "./components/Header"

function App() {
  return (
    <>
      <Nav/>
      
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/templatelist" element={<MemeGenerator />} />
      </Routes>
    </>
  );
}

export default App;
