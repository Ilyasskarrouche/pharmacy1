package ma.pharmacy.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ma.pharmacy.model.Ville;
import ma.pharmacy.model.Zone;
import ma.pharmacy.repository.VilleRepository;

@RestController
@RequestMapping("villes")
@CrossOrigin
public class VilleController {

	@Autowired
	private VilleRepository repository;

	@PostMapping("/save")
	public void save(@RequestBody Ville Ville) {
		repository.save(Ville);
	}

	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable(required = true) String id) {
		Ville s = repository.findById(Integer.parseInt(id));
		repository.delete(s);
	}

	@GetMapping("/all")
	public List<Ville> findAll() {
		return repository.findAll();
	}

	@GetMapping(value = "/count")
	public long countVille() {
		return repository.count();
	}
    
	@GetMapping("/zonesbyville/{id}")
	public List<Zone> findZone(@PathVariable(required = true) String id) {
		Ville s = repository.findById(Integer.parseInt(id));
		return s.getZones();
	}
	
	@GetMapping("/NbrPharmacie")
	public List findNbrPharmacieVille(){
		return repository.findNbrPharmacieVille();
	}
	
	@GetMapping("/NbrPharmacieZ")
	public List getCountPharmacieByVille(){
      return repository.countpharmacyByZone();
	}
	
	
}
