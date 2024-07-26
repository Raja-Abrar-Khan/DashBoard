export const LineChartData32 = {
    // const filteredData = data.filter(value => value !== undefined);
labels:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
datasets: [
    {
        Label: "",
        data:[25,50,40,50,80,45,50,60,75],
        borderColor: "#87ceeb", 
        backgroundColor: "#87ceeb",
        tension: 0.3,
    },
],
    };

    export const option6={
        scales: {
            y: {
                beginAtZero: true,
                suggestedMin: 0,
                suggestedMax: 100,
            }

        },
        plugins: {
            legend: {
              display: false
            },
    }
}