package com.example.assignment.recipe.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.sun.istack.NotNull;




@Entity //Let JPA know to build a table on the DB for this class
@Table(name="category")
public class Category {
	@Id //Primary key
	private Long id;
	
	@NotNull
	//Vegan, Vegeterian, Halal, etc..
	private String name;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	
}
