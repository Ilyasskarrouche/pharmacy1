package ma.pharmacy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ma.pharmacy.model.Pharmacie;
import ma.pharmacy.repository.PharmacieRepository;
import ma.pharmacy.service.PharmacieService;
import ma.pharmacy.service.UserService;

@RestController
@RequestMapping("pharmacies")
@CrossOrigin
public class PharmacieController {

	@Autowired
	private PharmacieRepository repository;
	@Autowired
	private PharmacieService service;
	@Autowired
	private UserService userService;

	@PostMapping("/save")
	public void save(@RequestBody Pharmacie Pharmacie) {
		repository.save(Pharmacie);
	}

	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable(required = true) String id) {
		Pharmacie s = repository.findById(Integer.parseInt(id)).orElse(null);;
		repository.delete(s);
	}

	@GetMapping("/all")
	public List<Pharmacie> findAll() {
		return repository.findAll();
	}
	
	@PutMapping("/update/{id}")
	public void update(@PathVariable(required = true) String id,@RequestBody Pharmacie Pharmacie) {
		Pharmacie toUpdate = repository.findById(Integer.parseInt(id)).orElse(null);
		toUpdate.setAdresse(Pharmacie.getAdresse());
		toUpdate.setLat(Pharmacie.getLat());
		toUpdate.setLog(Pharmacie.getLog());
		toUpdate.setNom(Pharmacie.getNom());
		toUpdate.setZone(Pharmacie.getZone());
		repository.save(toUpdate);
	}

	@GetMapping(value = "/count")
	public long countPharmacie() {
		return repository.count();
	}
	@GetMapping("/user/{mail}")
	public Pharmacie getDetailPharmacie(@PathVariable String mail) {
		return userService.findUserByEmail(mail).getPharmacy();
    
	}
	@GetMapping("/byId/{id}")
	public Pharmacie getPharmaciebyID(@PathVariable String id) {
		return repository.findById(Integer.parseInt(id)).orElse(null);
    
	}
	@GetMapping("/pharmacie/ville={id}")
	public List<Pharmacie> findPharmacieByVille(@PathVariable int id){
		return repository.findAllPharmacieByVille(id);
	}
	
	@PutMapping("/acceptePharmacie/id={id}")
	public Pharmacie acceptePharmacie(@PathVariable int id){

		return service.acceptePharmacie(id);
	}

	@PutMapping("/refusPharmacie/id={id}")
	public Pharmacie refusPharmacie(@PathVariable int id){

		return service.refusPharmacie(id);
	}

}
