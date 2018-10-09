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
@RequestMapping(ApiConstants.BASE_REST_USER_URL)
public class UserController {
    @Autowired
    EmailServices  emailServices;

    @Autowired
    UserRepository userRepo;

    @RequestMapping(value = "list", method = RequestMethod.GET)
    public List<User> getAllUser() {
        return userRepo.findAll();
    }

    @RequestMapping(value = "{id}", method = RequestMethod.GET)
    public User getUserById(@PathVariable Integer id) {
        return userRepo.findOne(id);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public void deleteUserById(@PathVariable Integer id) {
        userRepo.delete(id);
    }

    @RequestMapping(value = "save", method = RequestMethod.POST)
    public User SaveOrUpdateUser(@RequestBody User user) {
           try{
        emailServices.sendMessage(user.getEmail());
                }catch(Exception e){
                    System.out.println("eroor "+e.getMessage());
                }
        return userRepo.save(user);
    }
    @RequestMapping(value = "getuser/{userName}", method = RequestMethod.GET)
     public User getUserByUserName(@PathVariable String userName) {
        return userRepo.findByUsersName(userName);
    }
     @RequestMapping(value = "count",method = RequestMethod.GET)
     public int countUser(){
         return userRepo.countUser();
     }
}
