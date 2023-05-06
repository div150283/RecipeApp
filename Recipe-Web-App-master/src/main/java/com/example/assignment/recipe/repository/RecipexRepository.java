package com.example.assignment.recipe.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.assignment.recipe.model.Recipex;

public interface RecipexRepository extends JpaRepository<Recipex, Long> {
	
}
