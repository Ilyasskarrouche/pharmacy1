package ma.pharmacy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.pharmacy.model.Garde;


public interface GardeRepository extends JpaRepository<Garde, Integer> {
	
	Garde findById(int id);

}
