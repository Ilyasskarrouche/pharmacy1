package ma.pharmacy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import ma.pharmacy.model.Garde;
import ma.pharmacy.model.Pharmacie;

import java.util.List;

public interface PharmacieRepository extends JpaRepository<Pharmacie, Integer> {
	

	


	@Query("select p from Pharmacie p where p.zone.ville.id =:id")
	List<Pharmacie> findAllPharmacieByVille(@Param("id") int id);


	@Query("select pg.pharmacie from PharmacieDeGarde pg where  pg.garde.idGarde = :id and pg.pharmacie.zone.id = :zone_id")
	List<Pharmacie> findAllPharmacieEnGardeByGardeId(@Param("id") int id,@Param("zone_id") int zone_id);


	
	
	

}
