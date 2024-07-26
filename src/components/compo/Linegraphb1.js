import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as Chartjs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
import { LineChartData3 ,option6} from "./Daata3";

Chartjs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Linegraphb1 () {
    // const options = {}
   
    return <Line options={option6} data={LineChartData3}> </Line>
};
export default Linegraphb1;