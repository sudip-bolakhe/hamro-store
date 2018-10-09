/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sudip.hamrostore.repository;

import com.sudip.hamrostore.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author Prashant
 */
public interface ProductRepository extends JpaRepository<Product, Integer> {

    @Query("SELECT p FROM Product p WHERE p.name= :productName")
    public Product findByProductName(@Param("productName") String productName);

    @Query("SELECT COUNT(id) FROM Product")
    public int countProduct();
    
    
}
