/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sudip.hamrostore.controller;

import com.sudip.hamrostore.models.Product;
import com.sudip.hamrostore.repository.ProductRepository;
import com.sudip.hamrostore.utils.ApiConstants;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Perfect Sudip
 */
@RestController
@RequestMapping(ApiConstants.BASE_REST_PRODUCT_URL)
public class ProductController {

    @Autowired
    ProductRepository productRepo;

    @RequestMapping(value = "list", method = RequestMethod.GET)
    public List<Product> getAllProduct() {
        return productRepo.findAll();
    }

    @RequestMapping(value = "{id}", method = RequestMethod.GET)
    public Product getProductById(@PathVariable Integer id) {
        return productRepo.findOne(id);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public void deleteByProductId(@PathVariable Integer id) {
        productRepo.delete(id);
    }

    @RequestMapping(value = "save", method = RequestMethod.POST)
    public Product saveOrUpdateProduct(@RequestBody Product product) {
        return productRepo.save(product);
    }

    @RequestMapping(value = "getproduct/{productName}", method = RequestMethod.GET)
    public Product getProductByProductName(@PathVariable String productName) {
        return productRepo.findByProductName(productName);
    }

    @RequestMapping(value = "count", method = RequestMethod.GET)
    public int countUser() {
        return productRepo.countProduct();
    }
}
