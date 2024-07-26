export const LineChartData31 = {
    // const filteredData = data.filter(value => value !== undefined);
labels:["02.08", "02.09", "02.10", "02.11", "02.12", "02.13", "02.14"],
datasets: [
    {
        Label: "",
        data:[6,10,11,18,10,13,16],
        borderColor: "#FFA500", 
        backgroundColor: "#FFA500",
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
                suggestedMax: 20,
            }

        },
        plugins: {
            legend: {
              display: false // Hide the legend if you don't want it
            },
    }
}
