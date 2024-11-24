package com.supplyhouse.bean;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class CustomerServiceHours {

	  	@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    private String dayOfWeek;  // e.g., "Monday", "Friday", etc.
	    private String openTime;   // e.g., "08:00"
	    private String closeTime;  // e.g., "19:45"
	
}
