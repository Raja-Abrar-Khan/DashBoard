export const LineChartData3 = {
    // const filteredData = data.filter(value => value !== undefined);
labels:["02.08", "02.09", "02.10", "02.11", "02.12", "02.13", "02.14"],
datasets: [
    {
        Label: "",
        data:[100,90,80,120,125,110,80],
        borderColor: "#C25556", 
        backgroundColor: "#C25556",
        tension: 0.3,
    },
],
// options: {
//     scales: {
//         y: {
//             suggestedMin: 0,
//             suggestedMax: 100
//         }
//     }
// }
    };
    export const option6={
        scales: {
            y: {
                suggestedMin: 0,
                suggestedMax: 200,
            }

        },
        plugins: {
            legend: {
              display: false // Hide the legend if you don't want it
            },
    }
}
