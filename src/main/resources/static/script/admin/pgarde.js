$(document)
		.ready(
				function() {

					table = $('#tpgarde')
							.DataTable({
										ajax : {
											url : "pharmacieDeGardes/all",
											dataSrc : ''
										},
										columns : [

												{
													data : "pharmacieDeGardePK.dateDebut"
												},
												{
													data : "dateFin"
												},
												{
													data : "pharmacie.nom"
												},
												{
													data : "garde.type"
												},
												
												{
													"render" : function() {
														return '<button type="button" class="btn btn-outline-secondary modifier">Modifier</button>';
													}
												} ]

									});
									$.ajax({
										url:'/pharmacies/all',
										type:'GET',
										success : function(data) {
											var option = '<option value="0">choisir une option</option>';
											data.forEach(e=>{
												option += '<option value ='+e.id+'>'+e.nom+'</option>';
											});
											
										$('#pharmacie').html(option);
										},
										error : function(jqXHR, textStatus,
												errorThrown) {
											console.log(textStatus);
										}
										
									});
									$.ajax({
										url:'/villes/all',
										type:'GET',
										success : function(data) {
											var option = '<option value="0">choisir une option</option>';
											data.forEach(e=>{
												option += '<option value ='+e.id+'>'+e.nom+'</option>';
											});
											
										$('#ville').html(option);
										},
										error : function(jqXHR, textStatus,
												errorThrown) {
											console.log(textStatus);
										}
										
									});
									$("#ville").change(function () {
				
										$.ajax({
											url:'/villes/zonesbyville/'+$("#ville").val(),
											type:'GET',
											success : function(data) {
												var option = '<option value="0">choisir une option</option>';
												data.forEach(e=>{
													option += '<option value ='+e.id+'>'+e.nom+'</option>';
												});
												
											$('#zone').html(option);
											},
											error : function(jqXHR, textStatus,
													errorThrown) {
												console.log(textStatus);
											}
											
										});
				
				
									 })
									 $("#zone").change(function () {
				
										$.ajax({
											url:'/zones/phByZone/'+$("#zone").val(),
											type:'GET',
											success : function(data) {
												var option = '<option value="0">choisir une option</option>';
												data.forEach(e=>{
													option += '<option value ='+e.id+'>'+e.nom+'</option>';
												});
												
											$('#pharmacie').html(option);
											},
											error : function(jqXHR, textStatus,
													errorThrown) {
												console.log(textStatus);
											}
											
										});
				
				
									 })				 
									
					$.ajax({
						url:'/gardes/all',
						type:'GET',
						success : function(data) {
							var option = '';
							data.forEach(e=>{
								option += '<option value ='+e.idGarde+'>'+e.type+'</option>';
							});
							
						$('#garde').append(option);
						},
						error : function(jqXHR, textStatus,
								errorThrown) {
							console.log(textStatus);
						}
						
					});

					$('#btn').click(
							function() {
								var dateDebut = $("#dateDebut");
								var dateFin = $("#dateFin");
								var pharmacie = $("#pharmacie");
								var garde = $("#garde");
								if ($('#btn').text() == 'Ajouter') {
									var p = {
										
										dateFin : dateFin.val(),
										
										pharmacie : {
											id : pharmacie.val()
										},
										garde : {
											idGarde : garde.val()
										},
										pharmacieDeGardePK : {
											pharmaciePK: pharmacie.val(),
            								gardePK: garde.val(),
											dateDebut : dateDebut.val()
										}
									};

									$.ajax({
										url : 'pharmacieDeGardes/save',
										contentType : "application/json",
										dataType : "json",
										data : JSON.stringify(p),
										type : 'POST',
										async : false,
										success : function(data, textStatus,
												jqXHR) {
											table.ajax.reload();
										},
										error : function(jqXHR, textStatus,
												errorThrown) {
											console.log(textStatus);
										}
									});
									$("#main-content").load(
											"./page/admin/pgarde.html");
								}
							});

					$('#table-content')
							.on(
									'click',
									'.supprimer',
									function() {

										var id = $(this).closest('tr').find(
												'td').eq(0).text();
										var oldLing = $(this).closest('tr')
												.clone();
										var newLigne = '<tr style="position: relative;" class="bg-light" ><th scope="row">'
												+ id
												+ '</th><td colspan="4" style="height: 100%;">';
										newLigne += '<h4 class="d-inline-flex">Voulez vous vraiment supprimer cette Pharmacie de garde ? </h4>';
										newLigne += '<button type="button" class="btn btn-outline-primary btn-sm confirmer" style="margin-left: 25px;">Oui</button>';
										newLigne += '<button type="button" class="btn btn-outline-danger btn-sm annuler" style="margin-left: 25px;">Non</button></td></tr>';

										$(this).closest('tr').replaceWith(
												newLigne);
										$('.annuler').click(
												function() {
													$(this).closest('tr')
															.replaceWith(
																	oldLing);
												});
										$('.confirmer')
												.click(
														function(e) {
															e.preventDefault();
															$
																	.ajax({
																		url : 'pharmacieDeGardes/delete/'
																				+ id,
																		data : {},
																		type : 'DELETE',
																		async : false,
																		success : function(
																				data,
																				textStatus,
																				jqXHR) {
																			if (data
																					.includes("error") == true) {
																				$(
																						"#error")
																						.modal();
																			} else {
																				table.ajax
																						.reload();
																			}
																		},
																		error : function(
																				jqXHR,
																				textStatus,
																				errorThrown) {
																			$(
																					"#error")
																					.modal();
																		}
																	});

														});

									});

					
							$('#table-content').on(
								'click',
								'.modifier',
								function() {
									var btn = $('#btn');
									var dateDebut = $(this).closest('tr').find('td').eq(0)
											.text();
									
									var dateFin = $(this).closest('tr').find('td').eq(
											1).text();
									var pharmacie = $(this).closest('tr').find('td')
											.eq(2).text();
									var garde = $(this).closest('tr').find('td')
											.eq(3).text();
									
								
									
									btn.text('Modifier');
									$("#dateDebut").val(dateDebut);
									$("#dateFin").val(dateFin);
								
									var op = $('#pharmacie option').filter(function () { return $(this).html() == pharmacie; }).val();
											$("#pharmacie").val(op);
											var opp = $('#garde option').filter(function () { return $(this).html() == garde; }).val();
											$("#garde").val(opp);
									
									btn.click(function(e) {
												e.preventDefault();
												var p = {
													pharmacie : {
														id : $("#pharmacie").val()
													},
													garde : {
														idGarde :  $("#garde").val()
													},
													pharmacieDeGardePK : {
														pharmaciePK:  $("#pharmacie").val(),
														gardePK:  $("#garde").val(),
														dateDebut :  $("#dateDebut").val()
													},
													dateFin :  $("#dateFin").val()
													
												};
												if ($('#btn').text() == 'Modifier') {
													$.ajax({
														url : 'pharmacieDeGardes/save',
														contentType : "application/json",
														dataType : "json",
														data : JSON.stringify(p),
														type : 'POST',
														async : false,
														success : function(data,
																textStatus, jqXHR) {
															table.ajax.reload();
															$("#garde").val('');
															$("#dateDebut").val('');
															$("#dateFin").val('');
															$("#pharmacie").val('');
															
															btn.text('Ajouter');
														},
														error : function(jqXHR, textStatus,
																errorThrown) {
															console.log(textStatus);
														}
													});
													$("#main-content").load(
															"./page/admin/pgarde.html");
												}
											});		
								});
	
					
				});
