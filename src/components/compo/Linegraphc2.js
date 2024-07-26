import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as Chartjs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
import {LineChartData32,option6} from "./Daata32";
Chartjs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Linegraphc2 () {
    // const options = {}
   
    return <Line options={option6} data={LineChartData32}> </Line>
};
export default Linegraphc2;