package com.supplyhouse.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.supplyhouse.bean.CustomerServiceHours;
import com.supplyhouse.bean.SpecialHours;

@Service
public interface SupplyHouseService {

	
	// Get the standard service hours
    CustomerServiceHours getCurrentServiceHours();

    // Get a list of all special hours
    List<SpecialHours> getSpecialHours();

    // Add new special hours
    SpecialHours addSpecialHours(SpecialHours specialHours);
	
}
