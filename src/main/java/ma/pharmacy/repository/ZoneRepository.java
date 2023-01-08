package ma.pharmacy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.pharmacy.model.Zone;


public interface ZoneRepository extends JpaRepository<Zone, Integer> {
	
	Zone findById(int id);
	
	

}
