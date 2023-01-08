package ma.pharmacy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.pharmacy.model.Ville;

import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface VilleRepository extends JpaRepository<Ville, Integer> {
	
	Ville findById(int id);
	
    @Query("select v.nom ,(select count(p) from Pharmacie p where p.zone.ville.id=v.id) from Ville v group by v.nom")
    List<Object> findNbrPharmacieVille();
    
    @Query("select count(p.id),p.zone.nom  from Pharmacie p group by p.zone.id")
	List countpharmacyByZone();
}
