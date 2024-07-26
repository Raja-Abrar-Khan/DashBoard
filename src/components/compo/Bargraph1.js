import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as Chartjs, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';
import { BarChartData,option6 } from "./Daata2";

Chartjs.register(CategoryScale, LinearScale,  BarElement, Title, Tooltip, Legend);

function Bargraph1 () {
    // const options = {}
   
    return <Bar options={option6} data={BarChartData}> </Bar>
};
export default Bargraph1;