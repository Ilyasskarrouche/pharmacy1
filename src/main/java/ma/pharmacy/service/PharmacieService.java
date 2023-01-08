package ma.pharmacy.service;

import ma.pharmacy.model.Pharmacie;
import ma.pharmacy.model.PharmacieDeGarde;

import ma.pharmacy.repository.PharmacieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PharmacieService {

    @Autowired
    private PharmacieRepository repository;
    
    
    public Pharmacie acceptePharmacie(int id){
        return repository.findById(id).map(
                pharmacie -> {
                    pharmacie.setEtat(1);
                    return repository.save(pharmacie);
                }
        ).orElse(null);
    }

    public Pharmacie refusPharmacie(int id){
        return repository.findById(id).map(
                pharmacie -> {
                    pharmacie.setEtat(2);
                    return repository.save(pharmacie);
                }
        ).orElse(null);
    }

    
}
