export const LineChartData3c = {
    // const filteredData = data.filter(value => value !== undefined);
labels:["02.08", "02.09", "02.10", "02.11", "02.12", "02.13", "02.14"],
datasets: [
    {
        Label: "",
        data:[5,10,11,14,8,7,6],
        borderColor: "#FF1493", 
        backgroundColor: "#FF1493",
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
