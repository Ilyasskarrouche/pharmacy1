package ma.pharmacy.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

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
import ma.pharmacy.model.PharmacieDeGarde;
import ma.pharmacy.repository.PharmacieDeGardeRepository;
import ma.pharmacy.repository.PharmacieRepository;

@RestController
@RequestMapping("pharmacieDeGardes")
@CrossOrigin
public class PharmacieDeGardeController {

	@Autowired
	private PharmacieDeGardeRepository repository;
	@Autowired
	private PharmacieRepository repository1;

	@PostMapping("/save")
	public void save(@RequestBody PharmacieDeGarde PharmacieDeGarde) {
		repository.save(PharmacieDeGarde);
	}

	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable(required = true) String id) {
		PharmacieDeGarde s = repository.findById(Integer.parseInt(id));
		repository.delete(s);
	}

	@GetMapping("/all")
	public List<PharmacieDeGarde> findAll() {
		return repository.findAll();
	}
	@GetMapping("/garde/{id}")
	public Set<PharmacieDeGarde> getPharmaciePKbyID(@PathVariable String id) {
		List<PharmacieDeGarde> pks = repository.findAll();
		Set<PharmacieDeGarde> result = new HashSet<PharmacieDeGarde>();
		Pharmacie ph = repository1.findById(Integer.parseInt(id)).orElse(null);
		for(PharmacieDeGarde pk : pks) {
			if(pk.getPharmacie()==ph) {
				result.add(pk);
				}
		}
		return result;
		
    
	}

	
	@GetMapping(value = "/count")
	public long countPharmacieDeGarde() {
		return repository.count();
	}
	

}
