$(document).ready(function(){
	
	
// # ===============================
// # = Nombre des produits
// # ===============================
	$.ajax({
		url : 'pharmacies/count',
		data : '',
		type : 'GET',
		success : function(data) {
			$('#pharmacie').html(data);
		},
		error : function(jqXHR, textStatus,
				errorThrown) {
			console.log(textStatus);
		}
	});
	

	
// # ===============================
// # = Nombre des machines achetées par année
// # ===============================
	$.ajax({
		url : 'villes/count',
		data : '',
		type : 'GET',
		success : function(data) {
			$('#ville').html(data);
		},
		error : function(jqXHR, textStatus,
				errorThrown) {
			console.log(textStatus);
		}
	});
	

// # ===============================
// # = Nombre des machines par marque
// # ===============================
	$.ajax({
		url : 'pharmacieDeGardes/count',
		data : '',
		type : 'GET',
		success : function(data) {
			$('#pgarde').html(data);
		},
		error : function(jqXHR, textStatus,
				errorThrown) {
			console.log(textStatus);
		}
	});
	
	
	$.ajax({
		url : 'zones/count',
		data : '',
		type : 'GET',
		success : function(data) {
			$('#zone').html(data);
		},
		error : function(jqXHR, textStatus,
				errorThrown) {
			console.log(textStatus);
		}
	});
	  
});
