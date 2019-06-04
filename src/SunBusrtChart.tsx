import React from 'react';
import Plot from "react-plotly.js";
import Plotly from "plotly.js";
const data = [{
  type: "sunburst",
  ids: [
    "America", "Sudamerica", "Norte america", "Chile", "USA"
  ],
  labels: [
    "America", "Sudamerica", "Norte america", "Chile", "USA"
  ],
  parents: [
    "", "America", "America", "Sudamerica", "Norte america"
  ],
  outsidetextfont: {size: 20, color: "#377eb8"},
  // leaf: {opacity: 0.4},
  marker: {line: {width: 2}},
}];

const layout = {
  margin: {l: 0, r: 0, b: 0, t:0},
  sunburstcolorway:["#636efa","#ef553b","#00cc96"],
};
function SunBurstChart() {
  return (
    <>
      <h1>SunBurstChart</h1>
      <Plot
          data={data as Plotly.Data[]}
          layout={layout as any}
      />
    </>
  )
}
export default SunBurstChart