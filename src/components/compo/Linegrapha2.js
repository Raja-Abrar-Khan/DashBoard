import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as Chartjs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
import { LineChartData,option6 } from "./Daata";

Chartjs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Linegrapha2 () {
    // const options = {}
   
    return <Line options={option6} data={LineChartData}> </Line>
};
export default Linegrapha2;