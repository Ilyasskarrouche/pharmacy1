package ma.pharmacy.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Garde {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idGarde;
	
	private String type;
	
	@OneToMany(mappedBy = "garde",fetch = FetchType.EAGER)
	@JsonIgnore
	private List<PharmacieDeGarde> gardes ;
	
	public Garde(int idGarde, String type) {
		this.idGarde = idGarde;
		this.type = type;
	}

	public Garde(String type) {
		this.type = type;
	}

	public Garde() {
		super();
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public int getIdGarde() {
		return idGarde;
	}

	public void setIdGarde(int idGarde) {
		this.idGarde = idGarde;
	}

	public List<PharmacieDeGarde> getGardes() {
		return gardes;
	}

	public void setGardes(List<PharmacieDeGarde> gardes) {
		this.gardes = gardes;
	}
	
	
}
