import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layouts from "./custom_components/Layouts";
import Home from "./Components/Screens/Home";
import PersonalDetails1 from "./Components/Screens/PersonalDetails1";
import LoanDetails from "./Components/Screens/LoanDetails";
import DocumentsUpload from "./Components/Screens/DocumentsUpload";
import About from "./Components/Screens/About";
import Contact from "./Components/Screens/Contact";
import Card from "./Components/Screens/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loan from "./Components/Screens/Loan";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="card" element={<Card />} />
            <Route path="loan" element={<Loan />} />
            <Route path="personal-details" element={<PersonalDetails1 />} />
            <Route path="loan-details" element={<LoanDetails />} />
            <Route path="document-upload" element={<DocumentsUpload />} />
            {/* <About /> */}
            {/* <Contact /> */}
            {/* <Card /> */}
            {/* <PersonalDetails1 /> */}
            {/* <LoanDetails /> */}
            {/* <DocumentsUpload /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
