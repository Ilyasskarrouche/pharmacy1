$(document).ready(function () {
    function getCountFrom(url, i) {
        $.ajax({
            url: url,
            data: {op: ''},
            type: 'POST',
            success: function (data, textStatus, jqXHR) {
                $('h2[class="number"]').eq(i).text(data.length);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                $('h2[class="number"]').eq(i).text('...');
            }
        });
    }
    getCountFrom('controller/gestionClasses.php', 0);
    getCountFrom('controller/gestionFiliere.php', 1);
    var ctx = document.getElementById('myChart').getContext('2d');
                $.ajax({
                url: 'controller/gestionFiliere.php',
                        data: {op: 'countclasses'},
                        type: 'POST',
                        success: function (data, textStatus, jqXHR) {
                                var x = Array();
                                var y = Array();
                                data.forEach(function (e) {
                                        x.push(e.libelle);
                                        y.push(e.nbrclasses);
                                });
                                showGraph(x, y);
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                        console.log(textStatus);
                        }
                });
                        var haha= [
                        'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                        ];
                function showGraph(x, y) {
                    var myChart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: x,
                            datasets: [{
                                    data: y,
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(54, 162, 235, 0.2)',
                                        'rgba(255, 206, 86, 0.2)',
                                        'rgba(75, 192, 192, 0.2)',
                                        'rgba(153, 102, 255, 0.2)',
                                        'rgba(255, 159, 64, 0.2)'
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 206, 86, 1)',
                                        'rgba(75, 192, 192, 1)',
                                        'rgba(153, 102, 255, 1)',
                                        'rgba(255, 159, 64, 1)'
                                    ],
                                    borderWidth: 1
                                }]
                        },
                        options: {
                           
                            plugins: {
                                legend: {
                                    display: true,
                                    position: 'right',
                                    
                                    labels: {
                                        generateLabels: function (myChart) {
                                            return myChart.data.labels.map(function (label, i) {
                                                return {
                                                    
                                                    text: label,
                                                    fillStyle: haha[i]
                                                    
                                                };
                                            });
                                        }
                                    }
                                },
                                
                                title: {
                                    display: true,
                                    text: 'Nombre des classes par filière'
                                }
                            },
                            scales: {
                                y: {
                                    title: {
                                        display: true,
                                        text: 'Nombre des classes'
                                    }
                                },
                                x: {
                                    title: {
                                        display: true,
                                        text: 'Filière'
                                    }
                                }
//                                ,
//                                yAxes: [{
//					ticks: {
//						beginAtZero: true
//					}
//				}]
                            }
                        }
                    });
                }
    ;
});