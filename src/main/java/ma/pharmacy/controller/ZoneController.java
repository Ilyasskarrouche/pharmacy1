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

import ma.pharmacy.model.Pharmacie;
import ma.pharmacy.model.Zone;
import ma.pharmacy.repository.ZoneRepository;

@RestController
@RequestMapping("zones")
@CrossOrigin
public class ZoneController {

	@Autowired
	private ZoneRepository repository;

	@PostMapping("/save")
	public void save(@RequestBody Zone Zone) {
		repository.save(Zone);
	}

	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable(required = true) String id) {
		Zone s = repository.findById(Integer.parseInt(id));
		repository.delete(s);
	}

	@GetMapping("/all")
	public List<Zone> findAll() {
		return repository.findAll();
	}
	@GetMapping("/phByZone/{id}")
	public List<Pharmacie> findZone(@PathVariable(required = true) String id) {
		Zone s = repository.findById(Integer.parseInt(id));
		return s.getPharmacies();
	}

	@GetMapping(value = "/count")
	public long countZone() {
		return repository.count();
	}

}
