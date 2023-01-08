$(document).ready(function() {


	// # ===============================
	// # = Nombre des produits
	// # ===============================
	$.ajax({
		url: 'pharmacies/count',
		data: '',
		type: 'GET',
		success: function(data) {
			$('#pharmacie').html(data);
		},
		error: function(jqXHR, textStatus,
			errorThrown) {
			console.log(textStatus);
		}
	});



	// # ===============================
	// # = Nombre des machines achetées par année
	// # ===============================
	$.ajax({
		url: 'villes/count',
		data: '',
		type: 'GET',
		success: function(data) {
			$('#ville').html(data);
		},
		error: function(jqXHR, textStatus,
			errorThrown) {
			console.log(textStatus);
		}
	});


	// # ===============================
	// # = Nombre des machines par marque
	// # ===============================
	$.ajax({
		url: 'pharmacieDeGardes/count',
		data: '',
		type: 'GET',
		success: function(data) {
			$('#pgarde').html(data);
		},
		error: function(jqXHR, textStatus,
			errorThrown) {
			console.log(textStatus);
		}
	});


	$.ajax({
		url: 'zones/count',
		data: '',
		type: 'GET',
		success: function(data) {
			$('#zone').html(data);
		},
		error: function(jqXHR, textStatus,
			errorThrown) {
			console.log(textStatus);
		}
	});

	// Instantiate a new chart
	  var ctx = document.getElementById('myChart').getContext('2d');
                $.ajax({
                url: 'http://localhost:9090/villes/NbrPharmacie',
                        
                        type: 'GET',
                        success: function (data, textStatus, jqXHR) {
                                var x = Array();
                                var y = Array();
                                data.forEach(function (e) {
                                        x.push(e[0]);
                                        y.push(e[1]);
                                });
                                console.log(x);
                                console.log(y);

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
                                    text: 'Nombre des pharmacies par villes'
                                }
                            },
                            scales: {
                                y: {
                                    title: {
                                        display: true,
                                        text: 'Nombre des pharmacies'
                                    }
                                },
                                x: {
                                    title: {
                                        display: true,
                                        text: 'Villes'
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



          var ctx2 = document.getElementById('myChart2').getContext('2d');
                $.ajax({
                url: 'http://localhost:9090/villes/NbrPharmacieZ',
                        
                        type: 'GET',
                        success: function (data, textStatus, jqXHR) {
                                var x = Array();
                                var y = Array();
                                data.forEach(function (e) {
                                        x.push(e[1]);
                                        y.push(e[0]);
                                });
                                console.log(x);
                                console.log(y);

                                showGraph2(x, y);
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
                function showGraph2(x, y) {
                    var myChart2 = new Chart(ctx2, {
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
                                        generateLabels: function (myChart2) {
                                            return myChart2.data.labels.map(function (label, i) {
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
                                    text: 'Nombre des pharmacies par Zones'
                                }
                            },
                            scales: {
                                y: {
                                    title: {
                                        display: true,
                                        text: 'Nombre des pharmacies'
                                    }
                                },
                                x: {
                                    title: {
                                        display: true,
                                        text: 'Zones'
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
