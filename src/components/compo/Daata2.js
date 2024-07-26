export const BarChartData = {
    // const filteredData = data.filter(value => value !== undefined);
labels:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
datasets: [
    {
        Label: "",
        data:[100,650,200,180,410,610,410,580,410,410,580,400],
        borderColor: "rgb(243,165,165", 
        backgroundColor: "rgb(243,165,165",
    },
],
    };

    export const option6={
        scales: {
            y: {
                suggestedMin: 0,
                suggestedMax: 800,
            }

        },
        plugins: {
            legend: {
              display: false // Hide the legend if you don't want it
            },
    }
}