import React from "react";
import { useEffectOnce } from "react-use";
import { DashboardPage } from "../src/pages/Dashboard";
import ReactGA from 'react-ga4';
import "./App.css";

function App() {
  useEffectOnce(() => {
    const setAnalytics = () => {
      ReactGA.initialize('G-PMKTT8N013');
      ReactGA.send(window.location.pathname);
    }
    setAnalytics();
  })
  
  return (
    <div className="App">
      <DashboardPage />
    </div>
  );
}

export default App;
