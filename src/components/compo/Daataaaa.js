export const LineChartDataaa = {
    // const filteredData = data.filter(value => value !== undefined);
labels:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
datasets: [
    {
        fill: true,
        Label: "",
        data:[200, 220, 250, 300, 350, 500, 650, 700, 600],
       
        borderColor: "rgb(75,192,192)", 
        backgroundColor: "rgb75,192,192)",
        
        tension: 0,
        lineTension: 0,
        
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
              display: false
            },
            tooltip: {
                enabled: true, 
            },
            elements: {
                point: {
                    radius: 0,
                },
            },
            maintainAspectRatio: false,
    }
}

    

