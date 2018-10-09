/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sudip.hamrostore.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;


/**
 *
 * @author Perfect Sudip
 */
@Service
public class EmailServices {
    private JavaMailSender javaMailSender;
    @Autowired
    public EmailServices(JavaMailSender javaMailSender) {
        this.javaMailSender=javaMailSender;
    }
    public void sendMessage(String email) throws MailException{
        SimpleMailMessage mail= new SimpleMailMessage();
        System.out.println("reached");
        mail.setTo(email);
        mail.setSubject("Welcome to hamroStore");
        mail.setFrom("newprogramer08@gmail.com");
        mail.setText("You are  now member of HamroStore");
        javaMailSender.send(mail);
    }
     
    
}
