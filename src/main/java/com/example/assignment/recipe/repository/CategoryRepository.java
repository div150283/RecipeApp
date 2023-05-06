package com.example.assignment.recipe.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.assignment.recipe.model.Category;

//Connection to the database - JPA Hibernate
//This interface converts the Category class into a H2 DB table
public interface CategoryRepository extends JpaRepository<Category, Long>{
	Category findByName(String name);
}
