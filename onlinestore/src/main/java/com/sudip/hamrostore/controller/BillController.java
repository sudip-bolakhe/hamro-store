/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sudip.hamrostore.controller;

import com.sudip.hamrostore.models.Bill;
import com.sudip.hamrostore.utils.ApiConstants;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.sudip.hamrostore.repository.BillRepository;

/**
 *
 * @author Perfect Sudip
 */
@RestController
@RequestMapping(ApiConstants.BASE_REST_BILL_URL)
public class BillController {

    @Autowired
    BillRepository paymentRepo;

    @RequestMapping(value = "list", method = RequestMethod.GET)
    public List<Bill> getAllPayment() {
        return paymentRepo.findAll();
    }

    @RequestMapping(value = "{id}", method = RequestMethod.GET)
    public Bill getPaymentById(@PathVariable Integer id) {
        return paymentRepo.findOne(id);
    }
    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
     public void deletePaymentById(@PathVariable Integer id) {
        paymentRepo.delete(id);
    }
     @RequestMapping(value = "save", method = RequestMethod.POST)
     public Bill SaveOrUpadatePayment(@RequestBody Bill payment) {
        
        return paymentRepo.save(payment);
    }
}
