/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sudip.hamrostore.controller;

import com.sudip.hamrostore.models.User;
import com.sudip.hamrostore.repository.UserRepository;
import com.sudip.hamrostore.service.EmailServices;
import com.sudip.hamrostore.utils.ApiConstants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Perfect Sudip
 */

@RestController
@RequestMapping(ApiConstants.BASE_URL)
public class SignupController {
    @Autowired
    EmailServices  emailServices;
    @Autowired
    UserRepository userRepo;
    
    @RequestMapping(value = "/signup" ,method = RequestMethod.POST)
    public void addUser(@RequestBody User user){
        try{
            System.out.println("controller");
        emailServices.sendMessage(user.getEmail());
                }catch(Exception e){
                    System.out.println("eroor "+e.getMessage());
                }
        userRepo.save(user);
    }
}
