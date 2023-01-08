$(document)
		.ready(
				function() {

					table = $('#tpharmacie')
							.DataTable({
										ajax : {
											url : "pharmacies/all",
											dataSrc : ''
										},
										columns : [
												{
													data : "id"
												},
												{
													data : "nom"
												},
												{
													data : "adresse"
												},
												{
													data : "lat"
												},
												{
													data : "log"
												},
												{
													data : "zone.nom"
												},
												{
													data : "zone.ville.nom"
												},
												{
													data : "etat",
  render: function(data, type, row, meta) {
    if (data == 0) {
      return "En attente";
    } else if (data == 1){
      return "Accepte";
    }else {return "Refuser";}
  }
												},
												{
													"render" : function() {
														return '<button type="button" class="btn btn-outline-danger supprimer">Supprimer</button>';
													}
												},
												{
													"render" : function() {
														return '<button type="button" class="btn btn-outline-secondary modifier">Modifier</button>';
												}},
													
												{
													"render" : function() {
														return '<button type="button" class="btn btn-outline-danger refuser">Refuser</button>';
													}
												},
												{
													"render" : function() {
														return '<button type="button" class="btn btn-outline-secondary accepter">Accepter</button>';
													}
												} ]

									});
									$.ajax({
										url:'/zones/all',
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
					
					

					$('#btn').click(
							function() {
								var nom = $("#nom");
								var adresse = $("#adresse");
								var lat = $("#lat");
								var log = $("#log");
								var zone = $("#zone");
								var ville =$("#ville");
								if ($('#btn').text() == 'Ajouter') {
									var p = {
										nom : nom.val(),
										adresse : adresse.val(),
										lat : lat.val(),
										log : log.val(),
										zone : {
											id : zone.val()
										},
										ville : {
											id : ville.val()
										}
									};

									$.ajax({
										url : 'pharmacies/save',
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
											"./page/admin/pharmacie.html");
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
										newLigne += '<h4 class="d-inline-flex">Voulez vous vraiment supprimer cette pharmacie ? </h4>';
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
																		url : 'pharmacies/delete/'
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
								var id = $(this).closest('tr').find('td').eq(0)
										.text();
								
								var nom = $(this).closest('tr').find('td').eq(
										1).text();
								var adresse = $(this).closest('tr').find('td')
										.eq(2).text();
								var lat = $(this).closest('tr').find('td')
										.eq(3).text();
								var log = $(this).closest('tr').find('td')
										.eq(4).text();
								var zone = $(this).closest('tr').find('td')
								.eq(5).text();
								var ville = $(this).closest('tr').find('td')
								.eq(6).text();
								
							
								
								btn.text('Modifier');
								$("#nom").val(nom);
								$("#adresse").val(adresse);
								$("#lat").val(lat);
								$("#log").val(log);
								var op = $('#zone option').filter(function () { return $(this).html() == zone; }).val();
								$("#zone").val(op);
								var op1 = $('#ville option').filter(function () { return $(this).html() == ville; }).val();
								$("#ville").val(op1);
								$("#id").val(id);
								
								btn.click(function(e) {
									e.preventDefault();
									var p = {
										nom : $("#nom").val(),
										adresse : $("#adresse").val(),
										lat : $("#lat").val(),
										log : $("#log").val(),
										zone : {
											id : $("#zone").val()	
										}
										
										
									};
									if ($('#btn').text() == 'Modifier') {
										$.ajax({
											url : 'pharmacies/update/'+id,
											contentType : "application/json",
											dataType : "json",
											data : JSON.stringify(p),
											type : 'PUT',
											async : false,
											success : function(data,
													textStatus, jqXHR) {
												table.ajax.reload();
												$("#nom").val('');
												$("#adresse").val('');
												$("#lat").val('');
												$("#log").val('');
												$("#zone").val('');
												$("#ville").val('');
												btn.text('Ajouter');
											},
											error : function(jqXHR, textStatus,
													errorThrown) {
												console.log(textStatus);
											}
										});
										$("#main-content").load(
												"./page/admin/pharmacie.html");
									}
								});
							});
							
							$('#table-content').on(
							'click',
							'.accepter',
							function() {
								var id = $(this).closest('tr').find('td').eq(0)
										.text();
								
								console.log('dddd');
								console.log($("#id").val(id));
								$("#id").val(id);
								
								
										$.ajax({
											url : 'pharmacies/acceptePharmacie/id='+id,
											
											data : [],
											type : 'PUT',
											async : false,
											success : function(data,
													textStatus, jqXHR) {
												table.ajax.reload();
												
											},
											error : function(jqXHR, textStatus,
													errorThrown) {
												console.log(textStatus);
											}
										});
										$("#main-content").load(
												"./page/admin/pharmacie.html");
									}
								
							);
							
							
							$('#table-content').on(
							'click',
							'.refuser',
							function() {
								var id = $(this).closest('tr').find('td').eq(0)
										.text();
								
								console.log('dddd');
								console.log($("#id").val(id));
								$("#id").val(id);
								
								
										$.ajax({
											url : 'pharmacies/refusPharmacie/id='+id,
											
											data : [],
											type : 'PUT',
											async : false,
											success : function(data,
													textStatus, jqXHR) {
												table.ajax.reload();
												
											},
											error : function(jqXHR, textStatus,
													errorThrown) {
												console.log(textStatus);
											}
										});
										$("#main-content").load(
												"./page/admin/pharmacie.html");
									}
								
							);
							
							
				
	
							
							
							
							

					
				});
