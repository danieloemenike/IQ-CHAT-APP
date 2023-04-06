"use client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetAvatar from "./components/SetAvatar";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
//import ErrorBoundary from "./components/ErrorBoundary";
import {ErrorBoundary} from "react-error-boundary";
import Fallback from "./components/Fallback";
import PageUnavailable from "./pages/pageUnavailable";
export default function App() {
  const errorHandler = (error, errorInfo) => {
    console.log("Logging", error, errorInfo)
    //can send to external logging service but excluded because its not available
  }
  return (
    <ErrorBoundary fallback={<Fallback/>}  onError={errorHandler} >
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={ <Register /> } />
        
          <Route path="/login" element={ <Login /> } />
         
        <Route path="/setAvatar" element={<SetAvatar />} />
          <Route path="/" element={ <Chat /> } />
          <Route path="*" element={<PageUnavailable/> } /> 
      </Routes>
      </BrowserRouter>
      </ErrorBoundary>
  );
}
