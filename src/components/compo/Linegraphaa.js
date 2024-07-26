import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as Chartjs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
import { LineChartDataaa,option6 } from "./Daataaaa";

Chartjs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Linegraphaa () {
    // const options = {}
   
    return <Line options={option6} data={LineChartDataaa}> </Line>
};
export default Linegraphaa;


