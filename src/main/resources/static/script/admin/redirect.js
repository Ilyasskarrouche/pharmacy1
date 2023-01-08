$('a').removeClass('active');
$('a:contains(Statistiques)').addClass('active');
$("#main-content").load("page/statistiques.html");

function show(page) {
	if (page == 'pharmacie') {
		$('a').removeClass('active');
		$('a:contains(Pharmacy)').addClass('active');
		$("#main-content").load("page/admin/pharmacie.html");

		event.preventDefault();
	}
	if (page == "statistiques") {
		$('a').removeClass('active');
		$('a:contains(Statistiques)').addClass('active');
		$("#main-content").load("page/admin/statistiques.html");
		event.preventDefault();
	}
	if (page == "pgarde") {
		$('a').removeClass('active');
		$('a:contains(Pharmacies de garde)').addClass('active');
		$("#main-content").load("page/admin/pgarde.html");
		event.preventDefault();
	}
	if (page == "villes") {
		$('a').removeClass('active');
		$('a:contains(Villes)').addClass('active');
		$("#main-content").load("page/admin/ville.html");
		event.preventDefault();
	}
	if (page == "zonnes") {
		$('a').removeClass('active');
		$('a:contains(Zones)').addClass('active');
		$("#main-content").load("page/admin/zone.html");
		event.preventDefault();
	}
}
