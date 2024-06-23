import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUS from "./pages/AboutUS";
import About from "./pages/About";
import AlertState from "./context/alert/alertState";
import Alert from "./components/Alert";
import Login from "./components/Auth/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/noteState";
import Signup from "./components/Auth/Signup";
import Settings from "./pages/Settings"; // Import the Settings component
import ProtectedRoute from "./components/ProtectedRoute"; // Import the ProtectedRoute component

function App() {
  return (
    <>
      <AlertState>
        <NoteState>
          <Router>
            <Navbar />
            <Alert />
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/aboutUs" element={<AboutUS />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/settings" element={
                  <ProtectedRoute>
                    <Settings />
                  </ProtectedRoute>
                } />
              </Routes>
            </div>
          </Router>
        </NoteState>
      </AlertState>
    </>
  );
}

export default App;
