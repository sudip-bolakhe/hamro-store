/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sudip.hamrostore.controller;

import com.sudip.hamrostore.models.User;
import com.sudip.hamrostore.repository.UserRepository;
import com.sudip.hamrostore.utils.ApiConstants;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.util.Date;
import javax.servlet.ServletException;
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
public class LoginController {

    @Autowired
    UserRepository userRepo;

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public String login(@RequestBody User userJson) throws ServletException {
        if (userJson.getUsername() == null || userJson.getPassword() == null) {
            throw new ServletException("Please fill the username and password");
        }
        String userName = userJson.getUsername();
        String password = userJson.getPassword();

        User user = userRepo.findByUsersName(userName);
        if (user == null) {
            new ServletException("Username  didnt match");
        }
        String pwd = user.getPassword();
        if (!pwd.equals(password)) {
            throw new ServletException("Password didnt match");
        }

        return Jwts.builder().setSubject(userName).claim("role", "user").setIssuedAt(new Date())
                .signWith(SignatureAlgorithm.HS256, "secretKey").compact();
    }
}
