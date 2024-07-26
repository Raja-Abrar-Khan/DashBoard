import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as Chartjs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
import {LineChartData31,option6} from "./Daata31";
Chartjs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Linegraphc1 () {
    // const options = {}
   
    return <Line options={option6} data={LineChartData31}> </Line>
};
export default Linegraphc1;