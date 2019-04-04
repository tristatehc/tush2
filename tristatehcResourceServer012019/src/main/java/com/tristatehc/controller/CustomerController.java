package com.tristatehc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tristatehc.dto.CustomerDTO;
import com.tristatehc.service.CustomerService;

@RestController
@RequestMapping("customer")
public class CustomerController {
	
	@Autowired
	CustomerService service;
	
	@RequestMapping(path="/", method=RequestMethod.GET, produces={MediaType.APPLICATION_JSON_VALUE})
	public List<CustomerDTO> getAllCustomers(){
		System.out.println("@@@@@@@@@@@@@@@@@@@@@@@@@@ Without Param called@@@@@@@@@@@@@@@@@@@@@@@");
		
		return service.getAllCustomers();
		
	}
	@RequestMapping(path="/{emailId}", method=RequestMethod.GET, produces={MediaType.APPLICATION_JSON_VALUE})
	public List<CustomerDTO> getAllCustomers(@PathVariable("emailId") String emailId){
		System.out.println("@@@@@@@@@@@@@@@@@@@@@@@@@@ Param called@@@@@@@@@@@@@@@@@@@@@@@"+emailId);
		return service.getAllCustomers(emailId);
		
	}



}
