import React from 'react';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import './App.css';
import NavBar from './components/NavBar';
import Home from "./components/Home";
import ResponsiveAppBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import Excercises from './components/Excercises';
import User from "./components/User";
import Contact from './components/Contact';



const theme = createTheme({
  palette: {
    // mode: "dark",
    primary: {
      main: "#28282A", // a shade of blue as the primary color
    },
    secondary: {
      main: "#FF3366", // a shade of red as the secondary color
    },
    background: {
      default: "light gray", // a light gray background color
    },
    typography: {
      fontFamily: ['"Open Sans"', "sans-serif"].join(","),
      h1: {
        fontWeight: 600,
      },
      h2: {
        fontWeight: 500,
      },
      body1: {
        fontSize: 16,
      },
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme ={theme}>

      <ResponsiveAppBar/>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/User" element={<User/>} />
        <Route path="/Excercises" element={<Excercises/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>

      </ThemeProvider>
    </div>
  );
}

export default App;
