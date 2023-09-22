const grafico = document.getElementById('graphic');

const chart = new Chart(grafico, {
    type: 'bar',
    data: {
        datasets: [{
            data: [20, 10],
            label: 'Dashboard',
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)'
            ],
            borderWidth: 2
        }],
        labels: ['a', 'b']
    }
})

export { grafico, chart };