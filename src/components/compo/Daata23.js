export const BarChartData23 = {
    // const filteredData = data.filter(value => value !== undefined);
labels:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
datasets: [
    {
        Label: "",
        data:[2,17,5,4,12,16,12,14,12,12,12,14],
        borderColor: "#969DF6", 
        backgroundColor: "#969DF6",
    },
],
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