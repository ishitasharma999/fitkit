import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import './App.css';
import Home from "./components/Home";
import ResponsiveAppBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import Exercises from './components/Exercises';
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
      <Toolbar /> {/* spacer so content starts below the fixed AppBar */}
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/User" element={<User/>} />
        <Route path="/Exercises" element={<Exercises/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>

      </ThemeProvider>
    </div>
  );
}

export default App;
