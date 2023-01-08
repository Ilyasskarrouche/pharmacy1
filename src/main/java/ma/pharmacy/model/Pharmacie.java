package ma.pharmacy.model;

import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Pharmacie { 

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String nom;
	private String adresse;
	private Double lat;
	private Double log;
	


	@ManyToOne
	private Zone zone;
	@JsonIgnore
	@OneToMany(mappedBy = "pharmacie",fetch = FetchType.EAGER)
	private Set<PharmacieDeGarde> gardes ;
	@JsonIgnore
	@OneToOne(mappedBy = "pharmacie")
	private User user;
    private int etat = 0;
	public Pharmacie(String nom, String adresse, Double lat, Double log, Zone zone) {
		super();
		this.nom = nom;
		this.adresse = adresse;
		this.lat = lat;
		this.log = log;
		this.zone = zone;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Zone getZone() {
		return zone;
	}

	public void setZone(Zone zone) {
		this.zone = zone;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public Double getLat() {
		return lat;
	}

	public void setLat(Double lat) {
		this.lat = lat;
	}

	public Double getLog() {
		return log;
	}

	public void setLog(Double log) {
		this.log = log;
	}
	public int getEtat() {
		return etat;
	}

	public void setEtat(int etat) {
		this.etat = etat;
	}
	
	public Pharmacie() {
		super();
	}

}
