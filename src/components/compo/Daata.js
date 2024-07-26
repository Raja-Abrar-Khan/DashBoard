export const LineChartData = {
    // const filteredData = data.filter(value => value !== undefined);
labels:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
datasets: [
    {
        Label: "",
        data:[25,50,100,120,150,125,95,50,50],
        borderColor: "#ff8c00", 
        backgroundColor: "#ff8c00",
        tension: 0.6,
    },
],
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