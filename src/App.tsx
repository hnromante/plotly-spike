import React from 'react';
import logo from './logo.svg';
import './App.css';
import Plot from 'react-plotly.js';
import Plotly from 'plotly.js';
import PolarChart from "./PolarChart";
import SunBurstChart from "./SunBusrtChart";

const App: React.FC = () => {
  return (
    <div className="App">
      <PolarChart/>
      <SunBurstChart />
    </div>
  );
};

export default App;
