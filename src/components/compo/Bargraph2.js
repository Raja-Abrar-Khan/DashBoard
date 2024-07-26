import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as Chartjs, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';
import { BarChartData23,option6 } from "./Daata23";

Chartjs.register(CategoryScale, LinearScale,  BarElement, Title, Tooltip, Legend);

function Bargraph2 () {
    // const options = {}
   
    return <Bar options={option6} data={BarChartData23}> </Bar>
};
export default Bargraph2;