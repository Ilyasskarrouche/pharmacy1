package ma.pharmacy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.pharmacy.model.PharmacieDeGarde;


public interface PharmacieDeGardeRepository extends JpaRepository<PharmacieDeGarde, Integer> {
	
	PharmacieDeGarde findById(int id);

}
