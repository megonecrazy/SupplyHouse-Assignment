package com.supplyhouse.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.supplyhouse.bean.CustomerServiceHours;
import com.supplyhouse.bean.RestResponseBean;
import com.supplyhouse.bean.SpecialHours;
import com.supplyhouse.service.SupplyHouseService;

@RestController
@RequestMapping("/api")
public class SupplyHouseController {

	@Autowired
	SupplyHouseService supplyHouseService;

	@RequestMapping(method = RequestMethod.GET, path = "/hours/current", produces = "application/json")
	private ResponseEntity<CustomerServiceHours> getCustomerHours() {
		// TODO Auto-generated method stub
		supplyHouseService.getCurrentServiceHours();
		return new ResponseEntity<CustomerServiceHours>(new CustomerServiceHours(), HttpStatusCode.valueOf(201));
	}

	@RequestMapping(method = RequestMethod.GET, path = "/hours/special", produces = "application/json")
	private ResponseEntity<SpecialHours> getSpecialHours() {
		// TODO Auto-generated method stub
		supplyHouseService.getSpecialHours();
		return new ResponseEntity<SpecialHours>(new SpecialHours(), HttpStatusCode.valueOf(201));
	}

	@RequestMapping(method = RequestMethod.POST, path = "/hours/special", produces = "application/json")
	private ResponseEntity<RestResponseBean> addSpecialHours(SpecialHours hours) {
		// TODO Auto-generated method stub
		supplyHouseService.addSpecialHours(hours);
		return new ResponseEntity<RestResponseBean>(new RestResponseBean(), HttpStatusCode.valueOf(201));
	}
}
