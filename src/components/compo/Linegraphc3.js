import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as Chartjs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
import {LineChartData3c,option6} from "./Daata3c";
Chartjs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Linegraphc3 () {
    // const options = {}
   
    return <Line options={option6} data={LineChartData3c}> </Line>
};
export default Linegraphc3;